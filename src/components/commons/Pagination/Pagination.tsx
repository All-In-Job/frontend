import { useState } from 'react';

import ArrowButton from './ArrowButton/ArrowButton';
import * as S from './pagination.styles';
import { ReactComponent as LeftArrow } from './res/img/arrow_left.svg';
import { ReactComponent as RightArrow } from './res/img/arrow_right.svg';

type PaginationProps = {
  totalItemsCount: number;
  pageItemsCount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isChangeNumberLayout?: boolean;
};

function Pagination(props: PaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [targetPage, setTargetPage] = useState(1);
  const lastPage = Math.ceil(
    (props.totalItemsCount ?? props.pageItemsCount) / props.pageItemsCount,
  );

  const onClickPageNumber = (targetNumber: number) => {
    setTargetPage(targetNumber);
    props.setCurrentPage(targetNumber);
  };

  const onClickPrevPage = () => {
    setTargetPage(page => page - 1);
    props.setCurrentPage(page => page - 1);

    if (targetPage === startPage && startPage >= 1 && !props.isChangeNumberLayout) {
      setStartPage(startPage - 10);
    }
  };

  const onClickNextPage = () => {
    setTargetPage(page => page + 1);
    props.setCurrentPage(page => page + 1);

    if (targetPage === startPage + 9 && startPage <= lastPage && !props.isChangeNumberLayout) {
      setStartPage(startPage + 10);
    }
  };

  return (
    <S.PaginationContainer>
      <ArrowButton icon={LeftArrow} isDisabled={targetPage === 1} onClick={onClickPrevPage} />

      {props.isChangeNumberLayout ? (
        <S.PaginationLayout02>
          <span>{targetPage}</span>
          <span>/</span>
          <span>{lastPage}</span>
        </S.PaginationLayout02>
      ) : (
        <S.PaginationLayout01>
          {new Array(10).fill(1).map(
            (_, index) =>
              index + startPage <= lastPage && (
                <S.NumberButton
                  key={index}
                  isActive={index + startPage === targetPage}
                  onClick={() => onClickPageNumber(index + startPage)}
                >
                  {index + startPage}
                </S.NumberButton>
              ),
          )}
        </S.PaginationLayout01>
      )}

      <ArrowButton
        icon={RightArrow}
        isDisabled={targetPage === lastPage}
        onClick={onClickNextPage}
      />
    </S.PaginationContainer>
  );
}

export default Pagination;
