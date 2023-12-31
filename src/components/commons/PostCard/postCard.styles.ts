import styled from '@emotion/styled';

import { ReactComponent as Bookmark } from './res/img/bookmark.svg';
import { ReactComponent as SmallBookmark } from './res/img/small_bookmark.svg';
import { ReactComponent as Visibility } from './res/img/visibility.svg';

export const PostCardContainer = styled.article`
  position: relative;
  margin: 0 auto;
`;

export const PostCardImgBox = styled.div<{ imgHeight: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.imgHeight};
  border-radius: 14px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const PickButton = styled.button`
  position: absolute;
  width: 16px;
  height: 22px;
  right: 16px;
  bottom: 16px;
  background-color: transparent;
  cursor: pointer;
`;

export const PickIcon = styled(Bookmark)<{ 'data-ispick': boolean }>`
  path {
    fill: ${props =>
      props['data-ispick'] ? props.theme.palette.orange500 : props.theme.palette.black200};
  }
`;

export const InfoHost = styled.h2`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.body01.fontSize};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: SemiBold;
`;

export const InfoTitle = styled.h3`
  font-size: ${props => props.theme.textStyle.title01.fontSize};
  color: ${props => props.theme.palette.black500};
  line-height: ${props => props.theme.textStyle.title01.lineHeight};
  font-family: Bold;
`;

export const Location = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.palette.black200};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: SemiBold;
`;

export const PostCardInfo = styled.div<{ isChangeInfoLayout: boolean }>`
  padding: 16px 0 4px;

  p {
    font-size: ${props => props.theme.textStyle.label02.fontSize};
    line-height: ${props => props.theme.textStyle.label02.lineHeight};
    font-family: Bold;
  }

  ${props => (props.isChangeInfoLayout ? InfoHost : InfoTitle)} {
    margin-top: 8px;
  }

  ${props => props.isChangeInfoLayout && InfoTitle} {
    font-size: ${props => props.theme.textStyle.title02.fontSize};
    line-height: ${props => props.theme.textStyle.title02.lineHeight};
  }
`;

export const InfoDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const DateDday = styled.p`
  margin-right: 7px;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${props => props.theme.palette.orange500};
  background-color: ${props => props.theme.palette.orange100};
`;

export const DateCreation = styled.p`
  color: ${props => props.theme.palette.black200};
`;

export const PostCardFooter = styled.ul`
  display: flex;
  justify-content: flex-end;

  > li {
    display: flex;
    align-items: center;
    line-height: 20px;

    :nth-last-of-type(2) {
      display: flex;
      justify-content: center;
      width: 20px;
    }
  }
`;

export const SmallBookmarkIcon = styled(SmallBookmark)`
  margin-right: 2px;
`;

export const VisibilityIcon = styled(Visibility)`
  margin-right: 2px;
`;

export const DevideLine = styled.div`
  content: '';
  width: 1px;
  height: 12px;
  background-color: ${props => props.theme.palette.background.primary};
  border-radius: 1px;
`;

export const FooterCount = styled.p`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.label03.fontSize};
  font-family: Bold;
`;

export const PostCardTag = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${props => props.theme.palette.orange100};
  background-color: ${props => props.theme.palette.orange500};
  font-size: 14px;
  font-family: SemiBold;
  line-height: 21px;
`;
