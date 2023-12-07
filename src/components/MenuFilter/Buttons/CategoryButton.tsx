import { FC } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette, textStyle } = theme;

type Props = {
  title: string;
  isActive: boolean;
};

const CategoryButton: FC<Props> = ({ title, isActive }) => {
  return <Button isActive={isActive}>{title}</Button>;
};

export default CategoryButton;

const Button = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  color: ${props => (props.isActive ? '#f6f6f6' : palette.black200)};
  background-color: ${props => (props.isActive ? palette.orange500 : palette.background.primary)};
  font-size: ${textStyle.body01.fontSize};
  font-family: Bold;
  line-height: ${textStyle.body01.lineHeight};
  cursor: pointer;
`;
