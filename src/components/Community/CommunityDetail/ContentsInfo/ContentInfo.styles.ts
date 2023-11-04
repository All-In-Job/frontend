import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Profile = styled.img`
  background-color: ${palette.background.primary};
  border-radius: 100%;
  height: 44px;
  width: 44px;
`;

export const Nickname = styled.div`
  ${textStyle.title02}
`;

export const TimeDiff = styled.div`
  ${textStyle.label03}
  color: ${palette.black200};
`;
