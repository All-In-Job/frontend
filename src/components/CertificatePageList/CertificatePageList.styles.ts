import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 32px;
  background-color: ${palette.background.primary50};
  font-family: Bold;
`;

export const Title = styled.h3`
  ${textStyle.title011}
`;

export const CertificateInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CertificateItemWrapper = styled.div`
  border: solid 1px ${palette.orange300};
  background-color: white;
  border-radius: 12px;
`;
