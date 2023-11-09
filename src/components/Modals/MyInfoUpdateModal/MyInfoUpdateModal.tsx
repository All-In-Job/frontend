import styled from '@emotion/styled';

import { ModalBackground } from 'components/Modals/ModalBackground';

import { InterestFieldSection } from './InterestFieldSection';
import { NicknameSection } from './NicknameSection';
import { ProfileImageSection } from './ProfileImageSection';

const MODAL_WIDTH_RATIO = 2.67;
const MODAL_HEIGHT_RATIO = 1.35;

export const MyInfoUpdateModal = () => {
  return (
    <ModalBackground>
      <StyledContainer>MyInfoUpdateModal</StyledContainer>
      <ProfileImageSection />
      <NicknameSection />
      <InterestFieldSection />
    </ModalBackground>
  );
};

const StyledContainer = styled.div`
  background-color: white;
  width: ${window.innerWidth / MODAL_WIDTH_RATIO}px;
  height: ${window.innerHeight / MODAL_HEIGHT_RATIO}px;
`;
