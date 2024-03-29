import { FC } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette, textStyle } = theme;

type Props = {
  category: string;
  isSelected: boolean;
  onClickCategory: (category: string) => void;
};

const CategoryButton: FC<Props> = ({ category, isSelected, onClickCategory }) => {
  return (
    <Button onClick={() => onClickCategory(category)} isSelected={isSelected}>
      {category}
    </Button>
  );
};

export default CategoryButton;

const Button = styled.button<{ isSelected: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  color: ${props => (props.isSelected ? '#f6f6f6' : palette.black200)};
  background-color: ${props => (props.isSelected ? palette.orange500 : palette.background.primary)};
  font-size: ${textStyle.body01.fontSize};
  font-family: Bold;
  line-height: ${textStyle.body01.lineHeight};
  cursor: pointer;
`;
