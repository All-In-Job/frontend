import styled from '@emotion/styled';

import { MODAL_BACKGROUND_Z_INDEX, ModalBackground } from './ModalBackground';

const MODAL_WIDTH_RATIO = 2.67;
const MODAL_HEIGHT_RATIO = 1.35;

export const MyInfoUpdateModal = () => {
  return (
    <ModalBackground>
      <StyledContainer></StyledContainer>
    </ModalBackground>
  );
};

const StyledContainer = styled.div`
  width: ${window.innerWidth / MODAL_WIDTH_RATIO}px;
  height: ${window.innerHeight / MODAL_HEIGHT_RATIO}px;
  background-color: white;
  z-index: ${MODAL_BACKGROUND_Z_INDEX + 1};
  border-radius: 24px;
`;
