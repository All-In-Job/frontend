import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  padding: 48px 0;
  padding-right: 24px;
`;

export const Image = styled.img`
  width: 306px;
  height: 144px;
  background-color: ${palette.background.primary};
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

export const Info = styled.div`
  ${textStyle.title11}
  font-family: Medium;
  display: flex;

  & h3 {
    color: ${palette.black300};
    width: 101px;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
