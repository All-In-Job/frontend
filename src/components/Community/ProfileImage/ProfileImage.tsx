import * as S from './profileImage.styles';

type Props = {
  profileImage?: string;
};

export const ProfileImage = ({ profileImage }: Props) => {
  return <S.Profile src={profileImage} />;
};
