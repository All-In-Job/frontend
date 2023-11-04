import icon_profile from 'components/Community/CommunityDetail/res/icon-profile.svg';
import { ProfileImage } from 'components/Community/ProfileImage/ProfileImage';
import { getTimeDiffString } from 'components/Community/utils/getTimeDiffString';

import * as S from './ContentInfo.styles';

type Props = {
  profileImage?: string;
  nickname?: string;
  date?: string;
};

const icon = icon_profile;

export const ContentInfo = ({ profileImage, nickname, date }: Props) => {
  console.log(icon);
  return (
    <S.ContentInfo>
      <ProfileImage profileImage={profileImage} />
      <div>
        <S.Nickname>{nickname}님</S.Nickname>
        <S.TimeDiff>{getTimeDiffString(date as string)}</S.TimeDiff>
      </div>
    </S.ContentInfo>
  );
};
