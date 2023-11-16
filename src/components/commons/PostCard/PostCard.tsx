import { useState } from 'react';

import { Link } from 'react-router-dom';
import { PostCardProps } from 'types/postCard.type';

import * as S from './postCard.styles';

function PostCard({
  mainImage,
  enterprise,
  title,
  Dday,
  scrap,
  view,
  location,
  imgHeight,
  isPickButton,
  isChangeInfoLayout,
  index,
}: PostCardProps) {
  const [isPick, setIsPick] = useState(false);

  const onClickPick = () => {
    setIsPick(pick => !pick);
  };

  return (
    <S.PostCardContainer>
      <S.PostCardImgBox imgHeight={imgHeight ?? '282px'}>
        <img src={mainImage} />

        <S.TagContainer>
          {index < 4 ? <S.PostCardTag>SPECIAL</S.PostCardTag> : null}

          <S.DateDday>{Dday}</S.DateDday>
        </S.TagContainer>

        {isPickButton && (
          <Link to={'/login'}>
            <S.PickButton onClick={onClickPick}>
              <S.PickIcon data-ispick={isPick} />
            </S.PickButton>
          </Link>
        )}
      </S.PostCardImgBox>

      <S.PostCardInfo isChangeInfoLayout={isChangeInfoLayout ? true : false}>
        {isChangeInfoLayout ? (
          <>
            <S.InfoTitle>{title}</S.InfoTitle>
            <S.InfoHost>{enterprise}</S.InfoHost>
            {location && <S.Location>{location}</S.Location>}
          </>
        ) : (
          <>
            <S.InfoHost>{enterprise}</S.InfoHost>
            <S.InfoTitle>{title}</S.InfoTitle>
          </>
        )}
      </S.PostCardInfo>

      <S.PostCardFooter>
        <li>
          <S.SmallBookmarkIcon />
          <S.FooterCount>{scrap}</S.FooterCount>
        </li>
        <li>
          <S.DevideLine />
        </li>
        <li>
          <S.VisibilityIcon />
          <S.FooterCount>{view}</S.FooterCount>
        </li>
      </S.PostCardFooter>
    </S.PostCardContainer>
  );
}

export default PostCard;
