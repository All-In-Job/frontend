import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
// const { textStyle } = theme;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 306px;
  height: 144px;
  background-color: ${palette.background.primary};
  border: 1px solid;
`;
