import Pagination from 'components/commons/Pagination/Pagination';
import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './CardList.style';

export const CardList = () => {
  return (
    <S.CardListWrapper>
      <S.Section>
        {Array.from({ length: 12 }).map((_, idx) => {
          return (
            <PostCard
              key={idx}
              mainImage='https://picsum.photos/300/200.webp'
              infoHost='주최기관'
              title='2023 Meta Spark AR 콘텐츠 공모전'
              dateDday='D-12'
              dateCreation='2023.08.24'
              scrapCount='4234'
              viewCount='325'
              location='111'
              isPickButton
              isPostCardTag
            />
          );
        })}
      </S.Section>
      <Pagination pageItemsCount={120} totalItemsCount={1230} />
    </S.CardListWrapper>
  );
};
