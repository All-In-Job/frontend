import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationNumber = styled.button`
  width: 39px;
  height: 39px;
  background-color: transparent;
  border-radius: 14px;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const PaginationArrowBox = styled.div``;

export const LeftDoubleArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const LeftArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
  margin: 0 10px;
`;

export const RightDoubleArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

export const RightArrowButton = styled.button`
  width: 39px;
  height: 39px;
  border-radius: 14px;
  margin: 0 10px;
  background-color: #f0f0f0;
  cursor: pointer;
`;
