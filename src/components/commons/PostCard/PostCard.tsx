import * as S from './postCard.styles';

function PostCard() {
  return (
    <S.PostCardContainer>
      <S.PostCardImgBox>
        <img />

        <S.PostCardTag>SPECIAL</S.PostCardTag>

        <S.PickButton>
          <S.PickIcon />
        </S.PickButton>
      </S.PostCardImgBox>

      <S.PostCardInfo>
        <S.InfoHost>주최기관</S.InfoHost>
        <S.InfoTitle>2023 Meta Spark AR 콘텐츠 공모전</S.InfoTitle>
        <S.InfoDate>
          <S.DateDday>D-1</S.DateDday>
          <S.DateCreation>2023.08.24</S.DateCreation>
        </S.InfoDate>
      </S.PostCardInfo>

      <S.PostCardFooter>
        <li>
          <S.SmallBookmarkIcon />
          <S.FooterCount>264</S.FooterCount>
        </li>
        <li>
          <S.DevideLine />
        </li>
        <li>
          <S.VisibilityIcon />
          <S.FooterCount>4715</S.FooterCount>
        </li>
      </S.PostCardFooter>
    </S.PostCardContainer>
  );
}

export default PostCard;
