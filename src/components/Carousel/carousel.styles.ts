import styled from "@emotion/styled";

export const container = styled.div`
  height: 436px;
  position: relative;
  color: white;
  background-color: lightslategrey;
  border-radius: 14px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ArrowButton = styled.button<{ direction: "left" | "right" }>`
  width: 67px;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  transform: translateX(
      ${(props) => (props.direction === "left" ? "-50%" : "50%")}
    )
    translateY(-50%);
  right: ${(props) => (props.direction === "right" ? 0 : "none")};
  box-shadow: 0px 4px 13px #0000001c;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  z-index: 10;
`;

export const CarouselNavigation = styled.ul`
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const ControlsButton = styled.button`
  border-radius: 100%;
  background-color: #00000061;
  width: 11px;
  aspect-ratio: 1;
  cursor: pointer;
`;
