import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  title: string;
  enterprise: string;
  location?: string;
  isChangeInfoLayout?: boolean;
};

const PostCardInfo: FC<Props> = ({ isChangeInfoLayout, title, enterprise, location }) => {
  return (
    <InfoContainer isChangeInfoLayout={isChangeInfoLayout ? true : false}>
      {isChangeInfoLayout ? (
        <>
          <InfoTitle>{title}</InfoTitle>
          <InfoEnterprise>{enterprise}</InfoEnterprise>
          {location && <Location>{location}</Location>}
        </>
      ) : (
        <>
          <InfoTitle>{title}</InfoTitle>
          <InfoEnterprise>{enterprise}</InfoEnterprise>
        </>
      )}
    </InfoContainer>
  );
};

export default PostCardInfo;

const InfoEnterprise = styled.h4`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.body01.fontSize};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: SemiBold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
`;

const InfoTitle = styled.h3`
  font-size: ${props => props.theme.textStyle.title01.fontSize};
  color: ${props => props.theme.palette.black500};
  line-height: ${props => props.theme.textStyle.title01.lineHeight};
  font-family: Bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const Location = styled.h3`
  margin-top: 8px;
  color: ${props => props.theme.palette.black200};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: SemiBold;
`;

const InfoContainer = styled.div<{ isChangeInfoLayout: boolean }>`
  padding: 16px 0 12px;

  p {
    font-size: ${props => props.theme.textStyle.label02.fontSize};
    line-height: ${props => props.theme.textStyle.label02.lineHeight};
    font-family: Bold;
  }

  ${props => (props.isChangeInfoLayout ? InfoEnterprise : InfoTitle)} {
    margin-bottom: 8px;
  }

  ${props => props.isChangeInfoLayout && InfoTitle} {
    font-size: ${props => props.theme.textStyle.title02.fontSize};
    line-height: ${props => props.theme.textStyle.title02.lineHeight};
  }
`;
