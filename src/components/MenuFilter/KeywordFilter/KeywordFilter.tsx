import styled from '@emotion/styled';

import KeywordButton from 'components/MenuFilter/Buttons/KeywordButton';
import theme from 'styles/theme';

import { ReactComponent as ResetIcon } from '/src/components/MenuFilter/res/img/reset.svg';

const { palette, textStyle } = theme;

const KeywordFilter = () => {
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
        <li>
          <KeywordButton keyword='기획/아이디어' isActive />
        </li>
      </KeywordList>

      <SelectedKeywordList>
        <li>
          <KeywordButton keyword='기획/아이디어' isActive />
        </li>
      </SelectedKeywordList>
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
  border-top: 1px solid ${palette.line.normal};
  padding-top: 24px;
  margin-top: 24px;
`;
