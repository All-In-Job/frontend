import {useState} from "react";
import * as S from "./pagination.styles";

function Pagination() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <S.PaginationContainer>
      <S.PaginationArrowBox>
        <S.LeftDoubleArrowButton type="button">
          &lt;&lt;
        </S.LeftDoubleArrowButton>
        <S.LeftArrowButton type="button">&lt;</S.LeftArrowButton>
      </S.PaginationArrowBox>

      {new Array(10).fill(1).map((_, index) => (
        <S.PaginationNumber type="button">
          {index + pageNumber}
        </S.PaginationNumber>
      ))}

      <S.PaginationArrowBox>
        <S.RightArrowButton type="button">&gt;</S.RightArrowButton>
        <S.RightDoubleArrowButton type="button">
          &gt;&gt;
        </S.RightDoubleArrowButton>
      </S.PaginationArrowBox>
    </S.PaginationContainer>
  );
}

export default Pagination;
