import styled from '@emotion/styled';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

import { ModalBackground } from 'components/Modals/ModalBackground';

import { InterestFieldSection } from './InterestFieldSection';
import { NicknameSection } from './NicknameSection';
import { ProfileImageSection } from './ProfileImageSection';

const MODAL_WIDTH_RATIO = 2.67;
const MODAL_HEIGHT_RATIO = 1.15;

export const MyInfoUpdateModal = () => {
  return (
    <ModalBackground>
      <StyledContainer>
        <StyledHeader>
          <StyledTitle>프로필 수정</StyledTitle>
          <CloseIcon />
        </StyledHeader>
        <ProfileImageSection />
        <NicknameSection />
        <InterestFieldSection />
      </StyledContainer>
    </ModalBackground>
  );
};

const StyledContainer = styled.div`
  background-color: white;
  width: ${window.innerWidth / MODAL_WIDTH_RATIO}px;
  height: ${window.innerHeight / MODAL_HEIGHT_RATIO}px;
  border-radius: 24px;
  padding: 40px;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
