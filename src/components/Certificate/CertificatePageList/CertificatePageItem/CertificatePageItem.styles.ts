import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  ${textStyle.title11}
`;

export const CertificateInfo = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  background-color: ${palette.background.primary50};
  padding: 32px;
`;

export const CertificateItemWrapper = styled.div`
  border: solid 1px ${palette.orange300};
  background-color: white;
  border-radius: 12px;
`;
