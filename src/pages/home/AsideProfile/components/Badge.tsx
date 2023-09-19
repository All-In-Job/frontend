import { FC } from 'react';

import styled from '@emotion/styled';

interface Props {
  title: string;
  className?: string;
}

const Badge: FC<Props> = ({ title, className }) => {
  return <Container className={className}>{title}</Container>;
};

export default Badge;

const Container = styled.span`
  display: flex;
  padding: 4px 8px;
  margin-bottom: 8px;
  width: fit-content;
  color: var(--orange-500, #fd6b36);
  text-align: center;

  /* Caption 1/Bold */
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */

  border-radius: 4px;
  border: 1px solid var(--orange-500, #fd6b36);
  background: var(--black-white-wh, #fff);
`;
