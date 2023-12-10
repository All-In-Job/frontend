import { FC } from 'react';

import styled from '@emotion/styled';

import CategoryFilter from './CategoryFilter/CategoryFilter';
import KeywordFilter from './KeywordFilter/KeywordFilter';

type Props = {
  title: string;
};

const MenuFilter: FC<Props> = ({ title }) => {
  return (
    <MenuFilterWrapper>
      <CategoryFilter title={title} />
      <KeywordFilter />
    </MenuFilterWrapper>
  );
};

export default MenuFilter;

const MenuFilterWrapper = styled.div`
  padding: 32px;
  border-radius: 12px;
  background-color: ${props => props.theme.palette.background.secondary};
`;
