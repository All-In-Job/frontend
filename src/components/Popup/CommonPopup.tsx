import { FC, ReactNode } from 'react';

import styled from '@emotion/styled';

import { PopupControllerState } from 'hooks/usePopup';

interface Props {
  popupButton: ReactNode;
  popup: ReactNode;
  popupController: Omit<PopupControllerState, 'popupRef' | 'buttonRef'>;
}

const CommonPopup: FC<Props> = ({ popupButton, popup }) => {
  // const { isShow, setIsShow } = popupController;

  return (
    <>
      <Container>
        {popupButton}
        <PopupContainer>{popup}</PopupContainer>
      </Container>
      <Overlay />
    </>
  );
};

export default CommonPopup;

const Container = styled.div`
  position: relative;
  z-index: 2001;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background: var(--black-500, #121110);

  //팝업보다 인덱스 낮고 나머지 보다는 높아야함!!
  z-index: 2000;
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
