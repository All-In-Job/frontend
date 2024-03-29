import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Table = styled.table`
  border: solid 1px ${palette.orange300};
  background-color: ${palette.orange100};
  color: ${palette.black400};
  ${textStyle.title02}
  width: 100%;
  margin-bottom: 50px;
  tbody {
    tr {
      &:last-child {
        border-bottom: solid 1px ${palette.orange300};
      }
    }
  }
`;

export const Tr = styled.tr`
  border-bottom: solid 1px ${palette.orange100};
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

export const Tb = styled(Th)``;
