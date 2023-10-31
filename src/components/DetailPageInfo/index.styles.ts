import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Wrapper = styled.div`
  grid-column: span 12;
`;

export const Head = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
`;

export const DDay = styled.p`
  ${textStyle.label02}
  color: ${palette.orange500};
  background-color: ${palette.orange100};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  ${textStyle.headLine02}
  color: ${palette.black500};
  vertical-align: middle;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 12px;
  border-bottom: 1px solid ${palette.black100};
`;
