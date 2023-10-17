import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 32px;
  background-color: ${palette.background.primary50};
  font-family: Bold;
`;
