import { FC } from 'react';

import styled from '@emotion/styled';
import { format } from 'date-fns';

import theme from 'styles/theme';

export type MyInfoActivityCardProps = {
  id?: string;
  title: string;
  content: string;
  createdAt: Date;
};

export const MyInfoActivityCard: FC<MyInfoActivityCardProps> = ({ title, createdAt, content }) => {
  return (
    <StyledContainer>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>{title}</h1>
      <p style={{ color: theme.palette.black300, fontSize: 17 }}>
        {format(createdAt, 'yyyy.MM.dd')}
      </p>
      <p>{content}</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 384px;
  height: 196px;
  padding: 24px 28px;
  background-color: ${theme.palette.black100};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
