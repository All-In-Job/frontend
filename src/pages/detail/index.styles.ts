import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.div`
  font-family: Bold;
  grid-column: span 12;
  color: ${palette.black500};
  padding: 40px 0px;
`;

export const Title = styled.div`
  ${textStyle.headLine02}
  margin-bottom: 24px;
`;
