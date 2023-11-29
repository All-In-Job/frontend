import { FC } from 'react';

import { PostCardProps } from 'types/postCard.type';

import PostCard from 'components/commons/PostCard/PostCard';
import SkeletonPostCard from 'components/commons/Skeleton/SkeletonPostCard';

import * as S from './cardList.styles';

type Props = {
  data: PostCardProps[];
  isChangeInfoLayout: boolean;
  isLoad: boolean;
};

export const CardList: FC<Props> = ({ data, isChangeInfoLayout, isLoad }) => {
  const renderPost = (el: PostCardProps, index: number) => {
    if (isLoad) {
      return (
        <PostCard
          key={el.id}
          id={el.id}
          mainImage={el.mainImage}
          enterprise={el.enterprise}
          title={el.title}
          Dday={el.Dday}
          applicationPeriod={el.applicationPeriod}
          scrap={el.scrap}
          view={el.view}
          location={el.location}
          isPostCardTag
          index={index}
          isScrap={el.isScrap}
          isChangeInfoLayout={isChangeInfoLayout}
        />
      );
    } else {
      return <SkeletonPostCard key={el.id} isChangeInfoLayout={isChangeInfoLayout} />;
    }
  };

  if (data) return <S.Section>{data.map(renderPost)}</S.Section>;
};
