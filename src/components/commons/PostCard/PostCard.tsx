import * as S from './postCard.styles';

type PostCardProps = {
  mainImage: string;
  infoHost: string;
  title: string;
  dateDday: string;
  dateCreation: string;
  scrapCount: string;
  viewCount: string;
  location: string;
  imgHeight?: string;
  isPostCardTag?: boolean;
  isPickButton?: boolean;
  isChangeInfoLayout?: boolean;
};

function PostCard(props: PostCardProps) {
  return (
    <S.PostCardContainer>
      <S.PostCardImgBox imgHeight={props.imgHeight ?? '282px'}>
        <img src={props.mainImage} />

        {props.isPostCardTag && <S.PostCardTag>SPECIAL</S.PostCardTag>}

        {props.isPickButton && (
          <S.PickButton>
            <S.PickIcon />
          </S.PickButton>
        )}
      </S.PostCardImgBox>

      <S.PostCardInfo isChangeInfoLayout={props.isChangeInfoLayout ? true : false}>
        {props.isChangeInfoLayout ? (
          <>
            <S.InfoTitle>{props.title}</S.InfoTitle>
            <S.InfoHost>{props.infoHost}</S.InfoHost>
            {props.location && <S.Location>{props.location}</S.Location>}
          </>
        ) : (
          <>
            <S.InfoHost>{props.infoHost}</S.InfoHost>
            <S.InfoTitle>{props.title}</S.InfoTitle>
          </>
        )}
        <S.InfoDate>
          <S.DateDday>{props.dateDday}</S.DateDday>
          <S.DateCreation>{props.dateCreation}</S.DateCreation>
        </S.InfoDate>
      </S.PostCardInfo>

      <S.PostCardFooter>
        <li>
          <S.SmallBookmarkIcon />
          <S.FooterCount>{props.scrapCount}</S.FooterCount>
        </li>
        <li>
          <S.DevideLine />
        </li>
        <li>
          <S.VisibilityIcon />
          <S.FooterCount>{props.viewCount}</S.FooterCount>
        </li>
      </S.PostCardFooter>
    </S.PostCardContainer>
  );
}

export default PostCard;
