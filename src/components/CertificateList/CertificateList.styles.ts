import styled from '@emotion/styled';

import theme from 'styles/theme';

import { ReactComponent as Bookmark } from './res/img/bookmark.svg';
import { ReactComponent as Horizontal } from './res/img/horizontal_rule.svg';
import { ReactComponent as SolidBookmark } from './res/img/solid_bookmark.svg';
import { ReactComponent as View } from './res/img/view.svg';

const { palette } = theme;
const { textStyle } = theme;

export const CertificateListContainer = styled.article`
  display: flex;
  padding: 24px 34px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #e1e2e4;
`;

export const CertificateInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  height: 68px;
  width: 68px;
  margin-right: 16px;
  background-color: #d9d9d9;
`;

export const CertificateInfoText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
`;

export const Title = styled.h1`
  color: ${palette.black500};
  font-family: Bold;
  ${textStyle.title01}
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const Path = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: ${palette.black200};
  font-family: Thin;
  ${textStyle.body01}
`;

export const CountWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Bold;
  ${textStyle.label03}
`;

export const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  ${palette.orange200}
`;

export const BookmarkBtn = styled.button`
  display: flex;
  background-color: ${palette.background.secondary};
  border-radius: 4px;
  padding: 16.5px 15px;
  margin-left: 24px;
`;

export const BookmarkIcon = styled(Bookmark)``;

export const ViewIcon = styled(View)``;

export const SolidBookmarkIcon = styled(SolidBookmark)``;

export const HorizontalIcon = styled(Horizontal)``;
