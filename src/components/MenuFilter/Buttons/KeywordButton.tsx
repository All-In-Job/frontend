import { FC } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

import { ReactComponent as DeleteIcon } from '/src/components/MenuFilter/res/img/delete.svg';

const { palette, textStyle } = theme;

type Props = {
  keyword: string;
  isActive: boolean;
};

const KeywordButton: FC<Props> = ({ keyword, isActive }) => {
  return (
    <Button isActive={isActive}>
      #{keyword} <Delete />
    </Button>
  );
};

export default KeywordButton;

const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 2px solid ${props => (props.isActive ? palette.orange500 : palette.background.primary)};
  color: ${props => (props.isActive ? palette.orange500 : palette.black300)};
  font-size: ${textStyle.body01.fontSize};
  font-family: ${props => (props.isActive ? 'Bold' : 'Medium')};
  line-height: ${textStyle.body01.lineHeight};
  cursor: pointer;
`;

const Delete = styled(DeleteIcon)`
  margin-left: 8px;
`;
