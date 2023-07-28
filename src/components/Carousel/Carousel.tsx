import * as S from "./carousel.styles";

const images = Array.from({ length: 5 }, (_, idx) => idx);

export const Carousel = () => {
  return (
    <S.container>
      <S.ArrowButton direction={"left"}>{"<"}</S.ArrowButton>
      <S.ArrowButton direction={"right"}>{">"}</S.ArrowButton>
      <S.CarouselNavigation>
        {images.map((_, idx) => (
          <S.ControlsButton key={idx} />
        ))}
      </S.CarouselNavigation>
      <S.ImageContainer>
        {images.map((image, idx) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, ${Math.random() * 255})`,
              position: "absolute",
              zIndex: images.length - idx,
            }}
          >
            {image}
          </div>
        ))}
      </S.ImageContainer>
    </S.container>
  );
};
