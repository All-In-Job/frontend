import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import { useControlPageParam } from 'hooks/useControlPageParam';

import ArrowButton from './buttons/ArrowButton';
import NumberButton from './buttons/NumberButton';
import { PaginationContainer } from './pagination.styles';
import { ReactComponent as LeftArrow } from './res/img/arrow_left.svg';
import { ReactComponent as RightArrow } from './res/img/arrow_right.svg';

type Props = {
  currentPage: number;
  totalItemsCount: number;
  pageItemsCount: number;
};

const MenuPagination: FC<Props> = ({ currentPage, totalItemsCount, pageItemsCount }) => {
  const [startPage, setStartPage] = useState(1);
  const [targetPage, setTargetPage] = useState(1);
  const lastPage = Math.ceil(totalItemsCount / pageItemsCount);
  const { increasePage, decreasePage } = useControlPageParam();

  useEffect(() => {
    const initialPage = () => {
      const initialStartPage = Math.ceil(currentPage / 10) * 10 - 9;

      setStartPage(initialStartPage);
      setTargetPage(currentPage);
    };

    initialPage();
  }, [currentPage]);

  const handleNextPage = () => {
    increasePage();
    setTargetPage(page => page + 1);

    if (targetPage % 10 === 0) {
      setStartPage(startPage + 10);
    }
  };

  const handlePrevPage = () => {
    decreasePage();
    setTargetPage(page => page - 1);

    if (startPage === targetPage) {
      setStartPage(startPage - 10);
    }
  };

  return (
    <PaginationContainer>
      <ArrowButton
        icon={LeftArrow}
        isDisabled={currentPage === 1}
        handlePageNavigation={handlePrevPage}
      />

      <NumberList>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= lastPage && (
              <li key={index}>
                <NumberButton
                  number={index + startPage}
                  isActive={index + startPage === targetPage}
                />
              </li>
            ),
        )}
      </NumberList>

      <ArrowButton
        icon={RightArrow}
        isDisabled={currentPage === lastPage}
        handlePageNavigation={handleNextPage}
      />
    </PaginationContainer>
  );
};

export default MenuPagination;

const NumberList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 24px;

  > li:not(:last-of-type) {
    margin-right: 16px;
  }
`;
