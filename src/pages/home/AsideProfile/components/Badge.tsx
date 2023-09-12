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

const Container = styled.span``;
