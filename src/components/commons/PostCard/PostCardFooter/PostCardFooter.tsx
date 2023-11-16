import { FC } from 'react';

import styled from '@emotion/styled';

import { ReactComponent as SmallBookmark } from 'components/commons/PostCard/res/img/small_bookmark.svg';
import { ReactComponent as Visibility } from 'components/commons/PostCard/res/img/visibility.svg';

type Props = {
  scrap: string;
  view: string;
};

const PostCardFooter: FC<Props> = ({ scrap, view }) => {
  return (
    <FooterContainer>
      <li>
        <SmallBookmarkIcon />
        <FooterCount>{scrap}</FooterCount>
      </li>
      <li>
        <DvideLine />
      </li>
      <li>
        <VisibilityIcon />
        <FooterCount>{view}</FooterCount>
      </li>
    </FooterContainer>
  );
};

export default PostCardFooter;

const FooterContainer = styled.ul`
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

const SmallBookmarkIcon = styled(SmallBookmark)`
  margin-right: 2px;
`;

const VisibilityIcon = styled(Visibility)`
  margin-right: 2px;
`;

const DvideLine = styled.div`
  content: '';
  width: 1px;
  height: 12px;
  background-color: ${props => props.theme.palette.background.primary};
  border-radius: 1px;
`;

const FooterCount = styled.p`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.label03.fontSize};
  font-family: Bold;
`;
