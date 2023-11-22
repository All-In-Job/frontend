import { FC } from 'react';

import { PostCardProps } from 'types/postCard.type';

import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './cardList.styles';

type Props = {
  data: PostCardProps[];
  isChangeInfoLayout: boolean;
};

export const CardList: FC<Props> = ({ data, isChangeInfoLayout }) => {
  return (
    <S.Section>
      {data.map((el, idx) => {
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
            index={idx}
            isChangeInfoLayout={isChangeInfoLayout}
          />
        );
      })}
    </S.Section>
  );
};
