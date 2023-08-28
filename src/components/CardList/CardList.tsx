import Pagination from '../commons/Pagination/Pagination';
import PostCard from '../commons/PostCard/PostCard';

import * as S from './CardList.style';

export const CardList = () => {
  return (
    <>
      <S.Section>
        {Array.from({ length: 10 }).map((_, idx) => {
          return <PostCard key={idx} />;
        })}
      </S.Section>
      <Pagination />
    </>
  );
};
