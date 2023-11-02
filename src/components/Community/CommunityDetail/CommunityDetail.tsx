import { ReactComponent as HorizontalIcon } from 'assets/icons/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from 'assets/icons/icon-view.svg';

import { Count } from 'components/commons/Count/Count';

import * as S from './CommunityDetail.styles';
import { ReactComponent as CommendIcon } from './res/icon-commend.svg';
import { ReactComponent as LikeSolidIcon } from './res/icon-like-solid.svg';
import { ReactComponent as LikeIcon } from './res/icon-like.svg';
import { ReactComponent as ShareSolidIcon } from './res/icon-share.svg';

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
            <S.Nickname>{'hello'}님</S.Nickname>
            <S.TimeDiff>12잔</S.TimeDiff>
          </div>
        </S.ArticleHeader>

        <S.ArticleTitle>is Title</S.ArticleTitle>
        <S.Article>contents</S.Article>

        <S.ArticleFooter>
          <S.ButtonContainer>
            <S.IconBtn>
              <LikeSolidIcon /> <p>좋아요</p>
            </S.IconBtn>
            <S.IconBtn>
              <ShareSolidIcon /> <p>공유하기</p>
            </S.IconBtn>
          </S.ButtonContainer>
          <S.CountContainer>
            <Count count={1} children={<ViewIcon />} />
            <HorizontalIcon />
            <Count count={1} children={<CommendIcon />} />
            <HorizontalIcon />
            <Count count={1} children={<LikeIcon />} />
          </S.CountContainer>
        </S.ArticleFooter>
      </S.Body>
    </S.Container>
  );
};
