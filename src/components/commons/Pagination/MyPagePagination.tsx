import { FC } from 'react';

import styled from '@emotion/styled';

import ArrowButton from './buttons/ArrowButton';
import { PaginationContainer } from './pagination.styles';
import { ReactComponent as LeftArrow } from './res/img/arrow_left.svg';
import { ReactComponent as RightArrow } from './res/img/arrow_right.svg';

type Props = {
  currentPage: number;
  setCurrnetPage: React.Dispatch<React.SetStateAction<number>>;
  totalItemsCount: number;
  pageItemsCount: number;
};

const MyPagePagination: FC<Props> = ({
  currentPage,
  setCurrnetPage,
  totalItemsCount,
  pageItemsCount,
}) => {
  const lastPage = Math.ceil(totalItemsCount / pageItemsCount);

  const handleNextPage = () => {
    setCurrnetPage(page => page + 1);
  };

  const handlePrevPage = () => {
    setCurrnetPage(page => page - 1);
  };

  return (
    <PaginationContainer>
      <ArrowButton
        icon={LeftArrow}
        isDisabled={currentPage === 1}
        handlePageNavigation={handlePrevPage}
      />

      <PageNumber>
        <CurrentNumber>{currentPage}</CurrentNumber>
        <span>/</span>
        <p>{lastPage}</p>
      </PageNumber>

      <ArrowButton
        icon={RightArrow}
        isDisabled={currentPage === lastPage}
        handlePageNavigation={handleNextPage}
      />
    </PaginationContainer>
  );
};

export default MyPagePagination;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
  padding: 0 8px;
  margin: 0 24px;
  color: ${props => props.theme.palette.black100};
  font-size: 20px;
  font-family: Bold;
  line-height: 20px;
`;

const CurrentNumber = styled.p`
  color: ${props => props.theme.palette.orange500};
  font-family: ExtraBold;
`;
