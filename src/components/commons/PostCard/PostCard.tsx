import { useState } from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PostCardProps } from 'types/postCard.type';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';

import PostCardFooter from './PostCardFooter/PostCardFooter';
import PostCardImage from './PostCardImage/PostCardImage';
import PostCardInfo from './PostCardInfo/PostCardInfo';

function PostCard({
  mainImage,
  enterprise,
  title,
  Dday,
  applicationPeriod,
  scrap,
  view,
  location,
  isChangeInfoLayout,
  index,
  id,
  isScrap,
  path,
}: PostCardProps) {
  const [scrapCount, setScrapCount] = useState(Number(scrap));

  return (
    <PostCardContainer>
      <ScrapContainer imgHeight={isChangeInfoLayout ? '118px' : '282px'}>
        <ScrapButton id={id} isScrap={isScrap} fill={'primary'} setScrapCount={setScrapCount} />
      </ScrapContainer>

      <Link to={path} target='_blank'>
        <PostCardImage
          mainImage={mainImage}
          Dday={Dday}
          index={index}
          isChangeInfoLayout={isChangeInfoLayout}
        />

        <PostCardInfo
          title={title}
          enterprise={enterprise}
          dDay={Dday}
          applicationPeriod={applicationPeriod}
          location={location}
          isChangeInfoLayout={isChangeInfoLayout}
        />

        <PostCardFooter scrapCount={scrapCount} view={view} />
      </Link>
    </PostCardContainer>
  );
}

export default PostCard;

const PostCardContainer = styled.article`
  width: 100%;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;

const ScrapContainer = styled.div<{ imgHeight: string }>`
  position: absolute;
  width: 16px;
  height: 23px;
  top: ${props => `calc(${props.imgHeight} - 39px)`};
  right: 16px;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;
