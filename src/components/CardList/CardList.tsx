import PostCard from "../commons/PostCard/PostCard";
import * as S from "./CardList.style";

export const CardList = () => {
  return (
    <S.Section>
      {[1, 2, 3, 4].map((_) => (
        <PostCard />
      ))}
    </S.Section>
  );
};
