import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  targetPage: number;
  lastPage: number;
};

const MyPageNumber: FC<Props> = ({ targetPage, lastPage }) => {
  return (
    <PageNumberContainer>
      <CurrentNumber>{targetPage}</CurrentNumber>
      <span>/</span>
      <p>{lastPage}</p>
    </PageNumberContainer>
  );
};

export default MyPageNumber;

const PageNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
  padding: 0 8px;
  margin: 0 24px;
  color: ${props => props.theme.palette.black100};
  font-size: 20px;
  font-family: ExtraBold;
  line-height: 20px;
`;

const CurrentNumber = styled.p`
  color: ${props => props.theme.palette.orange500};
`;
