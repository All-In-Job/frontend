import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;

export const Profile = styled.img`
  background-color: ${palette.background.primary};
  border-radius: 100%;
  height: 44px;
  width: 44px;
`;

export const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border-radius: 100%;
  background-color: ${palette.background.primary};
`;
