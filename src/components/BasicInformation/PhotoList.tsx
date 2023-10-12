import { Dispatch, FC, SetStateAction } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/icon_check_circle.svg';

import theme from 'styles/theme';

export const photos = Array.from({ length: 12 }).map((_, idx) => {
  return `https://storage.googleapis.com/allinjob-profile-img/allinjob-profile-img/profileImg-${
    idx + 1
  }.jpg`;
});

type Props = {
  currentPhoto: string;
  setCurrentPhoto: Dispatch<SetStateAction<string>>;
};

export const PhotoList: FC<Props> = ({ currentPhoto, setCurrentPhoto }) => {
  return (
    <StyledContainer>
      {photos.map(photo => {
        const isSamePhoto = photo === currentPhoto;
        return (
          <StyledPhoto
            key={photo}
            $activeIdx={isSamePhoto}
            onClick={() => setCurrentPhoto(photo)}
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
