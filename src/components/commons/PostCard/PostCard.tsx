import { useState } from 'react';

import styled from '@emotion/styled';
import { PostCardProps } from 'types/postCard.type';

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
}: PostCardProps) {
  const [isScrap, setIsScrap] = useState(false);

  const handleScrap = () => {
    setIsScrap(isScrap => !isScrap);
  };

  return (
    <PostCardContainer>
      <PostCardImage
        mainImage={mainImage}
        Dday={Dday}
        index={index}
        isChangeInfoLayout={isChangeInfoLayout}
        isScrap={isScrap}
        handleScrap={handleScrap}
      />

      <PostCardInfo
        title={title}
        enterprise={enterprise}
        dDay={Dday}
        applicationPeriod={applicationPeriod}
        location={location}
        isChangeInfoLayout={isChangeInfoLayout}
      />

      <PostCardFooter scrap={scrap} view={view} />
    </PostCardContainer>
  );
}

export default PostCard;

const PostCardContainer = styled.article`
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;
