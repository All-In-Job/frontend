import { FC } from 'react';

import styled from '@emotion/styled';

import { Keyword } from 'components/MenuFilter/KeywordFilter';
import theme from 'styles/theme';

import { ReactComponent as DeleteIcon } from '/src/components/MenuFilter/res/img/delete.svg';

const { palette, textStyle } = theme;

type Props = {
  keyword: Keyword;
  isSelect: boolean;
  isSelectedButton?: boolean;
  onClickKeyword: (keyword: Keyword) => void;
  isDisabled?: boolean;
};

const KeywordButton: FC<Props> = ({
  keyword,
  isSelect,
  isSelectedButton,
  onClickKeyword,
  isDisabled,
}) => {
  console.log(isDisabled);
  return (
    <Button
      onClick={() => onClickKeyword(keyword)}
      isSelect={isSelect}
      disabled={isDisabled ?? isDisabled}
    >
      #{keyword.title} {isSelectedButton && <Delete />}
    </Button>
  );
};

export default KeywordButton;

const Button = styled.button<{ isSelect: boolean }>`
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 999px;
  border: 2px solid ${props => (props.isSelect ? palette.orange500 : palette.background.primary)};
  color: ${props => (props.isSelect ? palette.orange500 : palette.black300)};
  font-size: ${textStyle.body01.fontSize};
  font-family: ${props => (props.isSelect ? 'Bold' : 'Medium')};
  line-height: ${textStyle.body01.lineHeight};
  cursor: pointer;

  :disabled {
    background-color: ${palette.background.primary};
    cursor: default;
  }
`;

const Delete = styled(DeleteIcon)`
  margin-left: 8px;
`;
