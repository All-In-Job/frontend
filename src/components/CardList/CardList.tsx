// import Pagination from 'components/commons/Pagination/Pagination';
// import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './CardList.style';

export const CardList = () => {
  return (
    <S.CardListWrapper>
      <S.Section>
        {/*{Array.from({ length: 10 }).map((_, idx) => {*/}
        {/*  return <PostCard key={idx} />;*/}
        {/*})}*/}
      </S.Section>
      {/*<Pagination pageItemsCount={120} totalItemsCount={1230} />*/}
    </S.CardListWrapper>
  );
};
