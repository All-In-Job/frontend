import styled from "@emotion/styled";

export const container = styled.div`
  height: 436px;
  position: relative;
  color: white;
  background-color: lightslategrey;
  border-radius: 14px;
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
`;
