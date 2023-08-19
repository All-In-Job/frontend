import * as S from "./CardList.style";
import PostCard from "../commons/PostCard/PostCard";
import Pagination from "../commons/Pagination/Pagination";

export const CardList = () => {
  return <><S.Section>
    {Array.from({length: 10}).map((_, idx) => {
      return <PostCard key={idx} />
    })}
  </S.Section>
    <Pagination />
  </>;
};
