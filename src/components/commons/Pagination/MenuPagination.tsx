import { FC } from 'react';

import styled from '@emotion/styled';

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
  const lastPage = Math.ceil(totalItemsCount / pageItemsCount);

  console.log(lastPage);

  return (
    <PaginationContainer>
      <ArrowButton icon={LeftArrow} isDisabled={false} onClick={() => {}} />

      <NumberList>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + currentPage <= lastPage && (
              <li key={index}>
                <NumberButton
                  number={index + currentPage}
                  isActive={index + currentPage === currentPage}
                  handleClickPageNumber={() => {}}
                />
              </li>
            ),
        )}
      </NumberList>

      <ArrowButton icon={RightArrow} isDisabled={false} onClick={() => {}} />
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
