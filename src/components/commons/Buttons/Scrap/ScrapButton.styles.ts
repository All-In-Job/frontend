import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const ScrapButton = styled.button`
  ${textStyle.title11}
  font-family: Medium;
  background-color: ${palette.background.secondary};
  border: 2px solid ${palette.orange200};
  border-radius: 4px;
  color: ${palette.black200};
  padding: 16px 16.5px;
  display: flex;
  gap: 8px;
  align-items: center;
`;
