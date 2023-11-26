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
  id,
  isScrap,
}: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardImage
        mainImage={mainImage}
        Dday={Dday}
        index={index}
        isChangeInfoLayout={isChangeInfoLayout}
        id={id}
        isScrap={isScrap}
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
  width: 100%;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;
