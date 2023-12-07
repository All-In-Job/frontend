import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  children: JSX.Element;
};

const CategoryFilterLayout: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CategoryFilterLayout;

const Wrapper = styled.div`
  padding: 32px;
  border-radius: 12px;
  background-color: ${props => props.theme.palette.background.secondary};
`;
