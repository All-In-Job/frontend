import { getTimeDiffString } from 'components/Community/utils/getTimeDiffString';

import * as S from './ContentInfo.styles';

type Props = {
  profileImage?: string;
  nickname?: string;
  date?: string;
};

export const ContentInfo = ({ profileImage, nickname, date }: Props) => {
  return (
    <S.ContentInfo>
      <S.Profile src={profileImage} />
      <div>
        <S.Nickname>{nickname}님</S.Nickname>
        <S.TimeDiff>{getTimeDiffString(date as string)}</S.TimeDiff>
      </div>
    </S.ContentInfo>
  );
};
