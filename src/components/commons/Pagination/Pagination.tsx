import { useState } from 'react';

import styled from '@emotion/styled';

import ArrowButton from './ArrowButton/ArrowButton';
import MenuListNumber from './NumberLayout/MenuListNumber';
import MyPageNumber from './NumberLayout/MyPageNumber';
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
    <PaginationContainer>
      <ArrowButton icon={LeftArrow} isDisabled={targetPage === 1} onClick={onClickPrevPage} />

      {props.isChangeNumberLayout ? (
        <MyPageNumber lastPage={lastPage} targetPage={targetPage} />
      ) : (
        <MenuListNumber
          currentPage={targetPage}
          handlePageClick={onClickPageNumber}
          lastPage={lastPage}
          startPage={startPage}
        />
      )}

      <ArrowButton
        icon={RightArrow}
        isDisabled={targetPage === lastPage}
        onClick={onClickNextPage}
      />
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
