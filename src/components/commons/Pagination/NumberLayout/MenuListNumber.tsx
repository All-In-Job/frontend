import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  startPage: number;
  lastPage: number;
  currentPage: number;

  handlePageClick: (targetNumber: number) => void;
};

const MenuListNumber: FC<Props> = ({ startPage, lastPage, currentPage, handlePageClick }) => {
  return (
    <PageNumberContainer>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <NumberButton
              key={index}
              isActive={index + startPage === currentPage}
              onClick={() => handlePageClick(index + startPage)}
            >
              {index + startPage}
            </NumberButton>
          ),
      )}
    </PageNumberContainer>
  );
};

export default MenuListNumber;

const PageNumberContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 24px;
`;

const NumberButton = styled.button<{ isActive: boolean }>`
  color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.black100};
  background-color: transparent;
  font-size: 20px;
  font-family: ExtraBold;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 16px;
  }
`;
