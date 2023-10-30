import { PostCardProps } from 'types/postCard.type';

import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './cardList.styles';

type Props = {
  data: PostCardProps[];
};

export const CardList = ({ data }: Props) => {
  return (
    <S.Section>
      {data.map((el, idx) => {
        return (
          <PostCard
            key={idx}
            mainImage={el.mainImage}
            enterprise={el.enterprise}
            title={el.title}
            Dday={el.Dday}
            applicationPeriod={el.applicationPeriod}
            scrapCount='4234'
            view={el.view}
            location='111'
            isPickButton
            isPostCardTag
            index={idx}
          />
        );
      })}
    </S.Section>
  );
};
