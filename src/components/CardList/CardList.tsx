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
            scrap={el.scrap}
            view={el.view}
            location={el.location}
            isPostCardTag
            index={idx}
          />
        );
      })}
    </S.Section>
  );
};
