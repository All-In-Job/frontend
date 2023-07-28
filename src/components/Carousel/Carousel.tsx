import * as S from "./carousel.styles";

export const Carousel = () => {
  return (
    <S.container>
      <S.ArrowButton direction={"left"}>{"<"}</S.ArrowButton>
      <S.ArrowButton direction={"right"}>{">"}</S.ArrowButton>
    </S.container>
  );
};
