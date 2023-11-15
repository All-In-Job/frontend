import { FC, useState } from 'react';

import styled from '@emotion/styled';

import ArrowButton from './buttons/ArrowButton';
import { PaginationContainer } from './pagination.styles';
import { ReactComponent as LeftArrow } from './res/img/arrow_left.svg';
import { ReactComponent as RightArrow } from './res/img/arrow_right.svg';

type Props = {
  totalItemsCount: number;
  pageItemsCount: number;
};

const MyPagePagination: FC<Props> = ({ totalItemsCount, pageItemsCount }) => {
  const [startPage, setStartPage] = useState(1);
  const [targetPage, setTargetPage] = useState(1);
  const lastPage = Math.ceil(totalItemsCount / pageItemsCount);

  const handleNextPage = () => {
    setTargetPage(page => page + 1);

    if (targetPage % 10 === 0) {
      setStartPage(startPage + 10);
    }
  };

  const handlePrevPage = () => {
    setTargetPage(page => page - 1);

    if (startPage === targetPage) {
      setStartPage(startPage - 10);
    }
  };

  return (
    <PaginationContainer>
      <ArrowButton
        icon={LeftArrow}
        isDisabled={targetPage === 1}
        handlePageNavigation={handlePrevPage}
      />

      <PageNumber>
        <CurrentNumber>{targetPage}</CurrentNumber>
        <span>/</span>
        <p>{lastPage}</p>
      </PageNumber>

      <ArrowButton
        icon={RightArrow}
        isDisabled={targetPage === lastPage}
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
