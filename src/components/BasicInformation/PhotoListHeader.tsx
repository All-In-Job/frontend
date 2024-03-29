import { useContext } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { BasicInformationContext } from './BasicInformation';
import { profileImages } from './PhotoList';

export const PhotoListHeader = () => {
  const { currentFormState } = useContext(BasicInformationContext)!;

  return (
    <StyledContainer>
      <StyledPhotoWrapper>
        <StyledRoundPhoto style={{ backgroundImage: `url(${currentFormState.currentPhoto})` }} />
      </StyledPhotoWrapper>
      <StyledHeading>프로필 사진을 선택해주세요!</StyledHeading>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const StyledPhotoWrapper = styled.div`
  width: 142px;
  height: 142px;
  background-color: ${theme.palette.orange500};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const StyledRoundPhoto = styled.div`
  width: 126px;
  height: 126px;
  background-image: url(${profileImages[0]});
  background-size: cover;
  border-radius: 100%;
`;
const StyledHeading = styled.h1`
  font-size: 20px;
  color: ${theme.palette.orange500};
`;
