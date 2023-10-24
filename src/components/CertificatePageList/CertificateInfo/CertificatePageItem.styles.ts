import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  ${textStyle.title011}
`;

export const CertificateInfo = styled.div`
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

export const Table = styled.table`
  border: solid 1px ${palette.orange300};
  background-color: ${palette.orange100};
  color: ${palette.black400};
  ${textStyle.title02}
`;

export const Tr = styled.tr`
  border: solid 1px ${palette.orange300};
  background-color: ${palette.background.secondary};
  color: ${palette.black400};
  ${textStyle.title02}
`;

export const SecondaryTr = styled(Tr)`
  background-color: white;
`;

export const Th = styled.th`
  border-right: solid 1px ${palette.orange100};
  color: ${palette.black400};
  ${textStyle.title02}
  height: 72px;
  word-break: break-all;
  text-align: center;
  vertical-align: middle;

  :last-child {
    border-right: solid 1px ${palette.orange300};
  }
`;