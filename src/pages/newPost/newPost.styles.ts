import styled from '@emotion/styled';
import Select from 'react-select';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.main`
  display: grid;
  grid-column: span 12;
  font-family: Bold;
  color: ${palette.black500};
`;

export const Title = styled.h1`
  ${textStyle.headLine02}
  margin: 32px 0px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleSelect = styled(Select)``;
