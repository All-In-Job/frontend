import { FC, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export const MODAL_BACKGROUND_Z_INDEX = 9999;

export const ModalBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Overlay>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: ${MODAL_BACKGROUND_Z_INDEX};
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 24px;
`;
