import { useState } from 'react';

import { ReactComponent as ProfileIcon } from 'components/Community/CommunityDetail/res/icon-profile.svg';

import * as S from './profileImage.styles';

type Props = {
  profileImage?: string;
};

export const ProfileImage = ({ profileImage }: Props) => {
  const [hasError, setHasError] = useState(true);

  const handlerOnError = () => {
    setHasError(state => !state);
  };

  return (
    <>
      {hasError ? (
        <S.Placeholder>
          <ProfileIcon />
        </S.Placeholder>
      ) : (
        <S.Profile src={profileImage} onError={handlerOnError} />
      )}
    </>
  );
};
