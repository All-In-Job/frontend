import { useContext } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/icon_check_circle.svg';

import theme from 'styles/theme';

import { BasicInformationContext } from './BasicInformation';

export const profileImages = Array.from({ length: 12 }).map((_, idx) => {
  return `https://storage.googleapis.com/allinjob-user-image/allinjob-profile-img/profileImg-${
    idx + 1
  }.jpg`;
});

export const PhotoList = () => {
  const { currentFormState, setCurrentFormState } = useContext(BasicInformationContext)!;

  return (
    <StyledContainer>
      {profileImages.map(photo => {
        const isSamePhoto = photo === currentFormState.currentPhoto;
        return (
          <StyledPhoto
            key={photo}
            $activeIdx={isSamePhoto}
            onClick={() => setCurrentFormState({ ...currentFormState, currentPhoto: photo })}
            style={{ backgroundImage: `url(${photo})` }}
          >
            <div style={{ position: 'absolute', top: 5, right: 5 }}>
              <CheckCircleIcon fill={isSamePhoto ? theme.palette.orange400 : '#D0CFCF'} />
            </div>
          </StyledPhoto>
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
`;
const StyledPhoto = styled.div<{ $activeIdx: boolean }>`
  position: relative;
  width: 127px;
  height: 129px;
  cursor: pointer;
  margin: 0 auto;
  filter: ${props => (props.$activeIdx ? null : 'grayscale(100%)')};
`;
