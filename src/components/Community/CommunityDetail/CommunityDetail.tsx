import * as S from './CommunityDetail.styles';

export const CommunityDetail = () => {
  return (
    <S.Container>
      <S.Head>
        <h1>취준job담</h1> <S.Category>{'category'}</S.Category>
      </S.Head>
      <S.Body>
        <S.ArticleHeader>
          <S.Profile />
          <div>
            <S.Nickname>hello</S.Nickname>
            <S.TimeDiff>12잔</S.TimeDiff>
          </div>
        </S.ArticleHeader>

        <S.ArticleTitle>is Title</S.ArticleTitle>
        <S.Article>contents</S.Article>

        <S.ArticleFooter>
          <S.ButtonContainer>
            <S.IconBtn>
              <S.LikeSolidIcon /> <p>좋아요</p>
            </S.IconBtn>
            <S.IconBtn>
              <S.ShareSolidIcon /> <p>공유하기</p>
            </S.IconBtn>
          </S.ButtonContainer>
          <S.CountContainer>
            <S.HorizontalIcon />
          </S.CountContainer>
        </S.ArticleFooter>
      </S.Body>
    </S.Container>
  );
};
