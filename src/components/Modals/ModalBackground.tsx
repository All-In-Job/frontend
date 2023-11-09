import { FC, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export const MODAL_BACKGROUND_Z_INDEX = 9999;

export const ModalBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
      <StyledBackground />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${MODAL_BACKGROUND_Z_INDEX};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;
