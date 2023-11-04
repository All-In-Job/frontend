import { useEffect, useState } from 'react';

import { ReactComponent as HorizontalIcon } from 'assets/icons/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from 'assets/icons/icon-view.svg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

// import { requestDetailCrawlingApiData } from 'apis/detailCommunity';
import { Count } from 'components/commons/Count/Count';

import { Comment } from './Comment/Comment';
import * as S from './CommunityDetail.styles';
import { ContentInfo } from './ContentsInfo/ContentInfo';
import { ReactComponent as CommendIcon } from './res/icon-commend.svg';
import { ReactComponent as LikeSolidIcon } from './res/icon-like-solid.svg';
import { ReactComponent as LikeIcon } from './res/icon-like.svg';
import { ReactComponent as ShareSolidIcon } from './res/icon-share.svg';

export const CommunityDetail = () => {
  const { detailId } = useParams();
  const [detailData, setDetailData] = useState<Community>();
  useEffect(() => {
    // (async () => {
    //   const ret = await requestDetailCrawlingApiData(detailId as string);
    //   setDetailData(ret.data.data);
    // })();
    (async () => {
      const ret = await axios.get('/mocks/detailCommunity.json');
      setDetailData(ret.data.data);
    })();
  }, []);
  console.log(detailId);
  return (
    <S.Container>
      <S.Head>
        <h1>취준job담</h1> <S.Category>{detailData?.category}</S.Category>
      </S.Head>

      <S.Body>
        <ContentInfo
          profileImage={detailData?.user.profileImage}
          nickname={detailData?.user.nickname}
        />
        <S.ArticleTitle>{detailData?.title}</S.ArticleTitle>
        <S.Article>{detailData?.detail}</S.Article>

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
            <Count count={detailData?.view} children={<ViewIcon />} />
            <HorizontalIcon />
            <Count count={detailData?.comment} children={<CommendIcon />} />
            <HorizontalIcon />
            <Count count={detailData?.like} children={<LikeIcon />} />
          </S.CountContainer>
        </S.ArticleFooter>
      </S.Body>

      <S.Footer>
        <S.Title>댓글</S.Title>
        <S.CommentInputContainer>
          <S.Profile src={detailData?.user.profileImage} />
          <S.CommentInput placeholder='댓글을 남겨보세요!' />
          <S.SubmitButton>등록</S.SubmitButton>
        </S.CommentInputContainer>
        <S.CommentContainer>
          {detailData?.comments.map(ele => (
            <Comment key={ele.id} nickname={''} comment={ele.comment} />
          ))}
        </S.CommentContainer>
      </S.Footer>
    </S.Container>
  );
};
