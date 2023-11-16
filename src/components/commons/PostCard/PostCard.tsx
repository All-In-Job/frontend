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
  scrap,
  view,
  location,
  isChangeInfoLayout,
  index,
}: PostCardProps) {
  const [isPick, setIsPick] = useState(false);

  const onClickPick = () => {
    setIsPick(pick => !pick);
  };

  return (
    <PostCardContainer>
      <PostCardImage
        mainImage={mainImage}
        Dday={Dday}
        index={index}
        isChangeInfoLayout={isChangeInfoLayout}
        isScrap={isPick}
        handleScrap={onClickPick}
      />

      <PostCardInfo
        title={title}
        enterprise={enterprise}
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
