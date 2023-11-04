import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Nickname = styled.div`
  ${textStyle.title02}
`;

export const TimeDiff = styled.div`
  ${textStyle.label03}
  color: ${palette.black200};
`;
