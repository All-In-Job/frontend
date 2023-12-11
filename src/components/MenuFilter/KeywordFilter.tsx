import { FC } from 'react';

import styled from '@emotion/styled';

import KeywordButton from 'components/MenuFilter/Buttons/KeywordButton';
import theme from 'styles/theme';

import { ReactComponent as ResetIcon } from '/src/components/MenuFilter/res/img/reset.svg';

const { palette, textStyle } = theme;

export type Keyword = {
  id: string;
  title: string;
};

type Props = {
  keywordList: Keyword[];
  selectedKeywords: Keyword[];
  onClickKeyword: (keyword: Keyword) => void;
  onClickSelectedKeyword: (keyword: Keyword) => void;
};

const KeywordFilter: FC<Props> = ({
  keywordList,
  selectedKeywords,
  onClickKeyword,
  onClickSelectedKeyword,
}) => {
  return (
    <KeywordFilterContainer>
      <HeadContainer>
        <Title>키워드</Title>
        <ResetButton>
          <ResetText>초기화</ResetText>
          <ResetIcon />
        </ResetButton>
      </HeadContainer>

      <KeywordList>
        {keywordList.map(keyword => (
          <li key={keyword.id}>
            <KeywordButton
              keyword={keyword}
              isSelect={selectedKeywords.some(
                selectedKeyword => selectedKeyword.title === keyword.title,
              )}
              onClickKeyword={onClickKeyword}
            />
          </li>
        ))}
      </KeywordList>

      {selectedKeywords.length > 0 && (
        <SelectedKeywordList>
          {selectedKeywords.map(selectedKeyword => (
            <li key={selectedKeyword.id}>
              <KeywordButton
                keyword={selectedKeyword}
                isSelect
                onClickKeyword={onClickSelectedKeyword}
              />
            </li>
          ))}
        </SelectedKeywordList>
      )}
    </KeywordFilterContainer>
  );
};

export default KeywordFilter;

const KeywordFilterContainer = styled.div`
  padding-top: 24px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: ${textStyle.headLine02.fontSize};
  font-family: Bold;
  line-height: ${textStyle.headLine02.lineHeight};
  letter-spacing: 0.134px;
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const ResetText = styled.p`
  margin-top: 1.5px;
  color: ${palette.black200};
  font-size: ${textStyle.label03.fontSize};
  font-family: Bold;
`;

const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
`;

const SelectedKeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  border-top: 1px solid ${palette.line.normal};
  padding-top: 24px;
  margin-top: 24px;
`;
