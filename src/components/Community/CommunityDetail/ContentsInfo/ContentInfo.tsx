import * as S from './ContentInfo.styles';

type Props = {
  profileImage?: string;
  nickname?: string;
};

export const ContentInfo = ({ profileImage, nickname }: Props) => {
  return (
    <S.ContentInfo>
      <S.Profile src={profileImage} />
      <div>
        <S.Nickname>{nickname}님</S.Nickname>
        <S.TimeDiff>12잔</S.TimeDiff>
      </div>
    </S.ContentInfo>
  );
};
