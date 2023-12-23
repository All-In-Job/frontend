import { ChangeEvent, useEffect, useState } from 'react';

import { ReactComponent as HorizontalIcon } from 'assets/icons/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from 'assets/icons/icon-view.svg';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { submitComment } from 'apis/comment';
import { requestCommunityDetailData } from 'apis/detailCommunity';
import { toggleLikeCommunityDetail } from 'apis/toggleLike';
import { Count } from 'components/commons/Count/Count';

import Comment from './Comment/Comment';
import CommentSubmit from './CommentSubmit/CommentSubmit';
import * as S from './CommunityDetail.styles';
import { ContentInfo } from './ContentsInfo/ContentInfo';
import { ReactComponent as CommendIcon } from './res/icon-commend.svg';
import { ReactComponent as LikeSolidIcon } from './res/icon-like-solid.svg';
import { ReactComponent as LikeIcon } from './res/icon-like.svg';
import { ReactComponent as ShareSolidIcon } from './res/icon-share.svg';

export const CommunityDetail = () => {
  const { detailId } = useParams();
  const [detailData, setDetailData] = useState<Community>();
  const [comment, setComment] = useState('');

  useEffect(() => {
    const getCommunityDetailData = async () => {
      try {
        const res = await requestCommunityDetailData(detailId as string);
        if (res) setDetailData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCommunityDetailData();
  }, []);

  const handleToggleLike = async () => {
    try {
      const res = await toggleLikeCommunityDetail(detailData?.id as string);

      setDetailData(prevData => ({
        ...(prevData as Community),
        like: res.data.data.count,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const submitCommentData = async () => {
    if (comment === '') return;
    const commentData = { id: detailData?.id as string, comment };

    try {
      const res = await submitComment(commentData);
      if (res) {
        setComment('');
        setDetailData(prevData => ({
          ...(prevData as Community),
          comments: res.data.data.comments,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clean = detailData ? DOMPurify.sanitize(detailData.detail) : '';

  return (
    <S.Container>
      <S.Head>
        <h1>취준job담</h1> <S.Category>{detailData?.category}</S.Category>
      </S.Head>

      <S.Body>
        <ContentInfo
          date={detailData?.date}
          profileImage={detailData?.user.profileImage}
          nickname={detailData?.user.nickname}
        />
        <S.ArticleTitle>{detailData?.title}</S.ArticleTitle>
        <S.Article dangerouslySetInnerHTML={{ __html: clean }} />
        <S.ArticleFooter>
          <S.ButtonContainer>
            <S.IconBtn onClick={() => handleToggleLike()}>
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
        <CommentSubmit
          inputValue={comment}
          onChangeComment={onChangeComment}
          submitCommentData={submitCommentData}
        />

        <S.CommentContainer>
          {detailData?.comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              comment={comment.comment}
              commentLike={comment.commentLike}
              date={comment.date}
              user={comment.user}
            />
          ))}
        </S.CommentContainer>
      </S.Footer>
    </S.Container>
  );
};
