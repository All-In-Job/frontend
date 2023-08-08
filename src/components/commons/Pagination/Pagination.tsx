import {MouseEvent, useState} from "react";
import * as S from "./pagination.styles";

function Pagination() {
  const [startPage, setStartPage] = useState(1);
  const [targetPage, setTargetPage] = useState(1);

  const onClickPage = (e: MouseEvent<HTMLButtonElement>) => {
    const targetId = Number(e.currentTarget.id);
    setTargetPage(targetId);
  };

  return (
    <S.PaginationContainer>
      <S.PaginationArrowBox>
        <S.LeftDoubleArrowButton type="button">
          &lt;&lt;
        </S.LeftDoubleArrowButton>
        <S.LeftArrowButton type="button">&lt;</S.LeftArrowButton>
      </S.PaginationArrowBox>

      {new Array(10).fill(1).map((_, index) => (
        <S.PaginationNumber
          key={index + startPage}
          type="button"
          id={String(index + startPage)}
          onClick={onClickPage}
          isActive={index + startPage === targetPage}
        >
          {index + startPage}
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
