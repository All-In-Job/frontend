import { FC } from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ReactComponent as Bookmark } from 'components/commons/PostCard/res/img/bookmark.svg';

type Props = {
  mainImage: string;
  Dday: string;
  index: number;
  isChangeInfoLayout?: boolean;
  isScrap: boolean;
  handleScrap: () => void;
};

const PostCardImage: FC<Props> = ({
  mainImage,
  Dday,
  index,
  isChangeInfoLayout,
  isScrap,
  handleScrap,
}) => {
  return (
    <ImageContainer imgHeight={isChangeInfoLayout ? '118px' : '282px'}>
      <img src={mainImage} />

      {isChangeInfoLayout ? (
        <TagContainer>
          {index < 4 ? <PostCardTag>SPECIAL</PostCardTag> : null}

          <DateDday>{Dday}</DateDday>
        </TagContainer>
      ) : (
        <></>
      )}

      <Link to={'/login'}>
        <ScrapButton onClick={handleScrap}>
          <ScrapIcon data-isscrap={isScrap} />
        </ScrapButton>
      </Link>
    </ImageContainer>
  );
};

export default PostCardImage;

const ImageContainer = styled.div<{ imgHeight: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.imgHeight};
  border-radius: 14px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  line-height: 32px;
`;

const DateDday = styled.p`
  height: 32px;
  padding: 0 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.orange500};
  color: ${props => props.theme.palette.orange500};
  background-color: ${props => props.theme.palette.orange100};
  font-size: 15px;
  font-family: Bold;
`;

const PostCardTag = styled.div`
  padding: 0 8px;
  margin-right: 8px;
  border-radius: 4px;
  color: ${props => props.theme.palette.orange100};
  background-color: ${props => props.theme.palette.orange500};
  font-size: 14px;
  font-family: SemiBold;
`;

const ScrapButton = styled.button`
  position: absolute;
  width: 16px;
  height: 22px;
  right: 16px;
  bottom: 16px;
  background-color: transparent;
  cursor: pointer;
`;

const ScrapIcon = styled(Bookmark)<{ 'data-isscrap': boolean }>`
  path {
    fill: ${props =>
      props['data-isscrap'] ? props.theme.palette.orange500 : props.theme.palette.black200};
  }
`;
