import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  title: string;
  enterprise: string;
  dDay: string;
  applicationPeriod: string;
  location?: string;
  isChangeInfoLayout?: boolean;
};

const PostCardInfo: FC<Props> = ({
  isChangeInfoLayout,
  title,
  enterprise,
  dDay,
  // applicationPeriod,
  location,
}) => {
  return (
    <>
      <InfoContainer isChangeInfoLayout={isChangeInfoLayout ? true : false}>
        <Title>{title}</Title>
        <Enterprise>{enterprise}</Enterprise>
        {location && <Location>{location}</Location>}
      </InfoContainer>
      {isChangeInfoLayout && (
        <Date>
          <Dday>{dDay}</Dday>
          <ApplicationPeriod>2023.08.24</ApplicationPeriod>
        </Date>
      )}
    </>
  );
};

export default PostCardInfo;

const Title = styled.h3`
  height: 52px;
  margin-bottom: 8px;
  line-height: ${props => props.theme.textStyle.title01.lineHeight};
  color: ${props => props.theme.palette.black500};
  font-size: ${props => props.theme.textStyle.title01.fontSize};
  font-family: Bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
`;

const Enterprise = styled.h4`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.body01.fontSize};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: SemiBold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
`;

const Location = styled.h4`
  color: ${props => props.theme.palette.black200};
  font-size: ${props => props.theme.textStyle.body01.fontSize};
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

  ${props => props.isChangeInfoLayout && Enterprise} {
    margin-bottom: 8px;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dday = styled.p`
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.orange500};
  color: ${props => props.theme.palette.orange500};
  background-color: ${props => props.theme.palette.orange100};
  font-size: ${props => props.theme.textStyle.label02};
  font-family: Bold;
`;

const ApplicationPeriod = styled.p`
  color: ${props => props.theme.palette.black300};
  font-size: 15px;
  font-family: Bold;
`;
