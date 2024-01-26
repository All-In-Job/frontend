import { useContext } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as CheckIcon } from 'assets/icons/icon_check_circle.svg';

import { profileImages } from 'components/BasicInformation/PhotoList';
import theme from 'styles/theme';

import { MyInfoUpdateContext } from './MyInfoUpdateModal';

export const ProfileImageSection = () => {
  const { state, setState } = useContext(MyInfoUpdateContext);

  return (
    <StyledContainer>
      <StyledPreview>
        <StyledPreviewImage image={state.profileImage} />
      </StyledPreview>
      <StyledImageGrid>
        {profileImages.map((profileImage, idx) => {
          const isSamePhoto = profileImage === state.profileImage;
          return (
            <StyledImage
              key={idx}
              image={profileImage}
              onClick={() => setState({ ...state, profileImage })}
            >
              <div style={{ position: 'absolute', top: 5, right: 5 }}>
                <CheckIcon
                  style={{ width: 16, height: 16 }}
                  fill={isSamePhoto ? theme.palette.orange400 : '#D0CFCF'}
                />
              </div>
            </StyledImage>
          );
        })}
      </StyledImageGrid>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 24px;
  justify-content: center;
`;

const StyledPreview = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledPreviewImage = styled.div<{ image: string }>`
  background-image: ${props => `url(${props.image})`};
  border-radius: 100%;
  width: 104px;
  height: 104px;
  background-size: cover;
  background-position: center;
  border: 5px ${theme.palette.orange500} solid;
`;

const StyledImageGrid = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;
const StyledImage = styled.div<{ image: string }>`
  background-image: ${props => `url(${props.image})`};
  width: 80px;
  height: 80px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;
