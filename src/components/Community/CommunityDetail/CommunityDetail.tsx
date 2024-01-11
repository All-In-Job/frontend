import { ChangeEvent, useEffect, useState } from 'react';

import { ReactComponent as HorizontalIcon } from 'assets/icons/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from 'assets/icons/icon-view.svg';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Community, CommunityLikes } from 'types/community.type';

import { submitComment } from 'apis/comment';
import { requestCommunityDetailData } from 'apis/detailCommunity';
import { toggleLikeCommunityDetail } from 'apis/toggleLike';
import { Count } from 'components/commons/Count/Count';
import { loginUserState } from 'store/user';

import Comment from './Comment/Comment';
import CommentSubmit from './CommentSubmit/CommentSubmit';
import * as S from './CommunityDetail.styles';
import { ContentInfo } from './ContentsInfo/ContentInfo';
import { ReactComponent as CommendIcon } from './res/icon-commend.svg';
import { ReactComponent as LikeIcon } from './res/icon-like.svg';
import { ReactComponent as ShareSolidIcon } from './res/icon-share.svg';

type UpdatedLikeUser = {
  email: string;
  id: string;
  name: string;
  nickname: string;
  phone: string;
  profileImage: string;
  provider: string;
  subMajorId: string;
  thermometer: number;
  top: number;
};

type UpdatedLikeData = {
  communityId: string;
  id: string;
  user: UpdatedLikeUser;
  userId: string;
};

export const CommunityDetail = () => {
  const { detailId } = useParams();
  const [loginUser] = useRecoilState(loginUserState);
  const [detailData, setDetailData] = useState<Community>();
  const [comment, setComment] = useState('');
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCommunityDetailData = async () => {
      try {
        const res = await requestCommunityDetailData(detailId as string);

        if (res) {
          const isLiked = res.data.data.communitiyLikes.some(
            (like: CommunityLikes) => like.userId === loginUser.id,
          );
          setIsLike(isLiked);
          setDetailData(res.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCommunityDetailData();
  }, [loginUser]);

  const handleToggleLike = async () => {
    try {
      const res = await toggleLikeCommunityDetail(detailData?.id as string);
      const updatedLikeCount = res.data.data.count;
      const updatedCommunityLikes = res.data.data.toggleLikes;

      if (updatedLikeCount > 0) {
        const isLikedByUser = updatedCommunityLikes.some(
          (udLikeData: UpdatedLikeData) => udLikeData.user.id === loginUser.id,
        );
        setIsLike(isLikedByUser);
        setDetailData(prevData => ({
          ...(prevData as Community),
          like: updatedLikeCount,
        }));
      } else {
        setIsLike(false);
        setDetailData(prevData => ({
          ...(prevData as Community),
          like: 0,
        }));
      }
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

  if (!isLoading)
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
              <S.IconBtn isLike={isLike} onClick={() => handleToggleLike()}>
                <S.LikeSolid data-isliked={isLike} /> <p>좋아요</p>
              </S.IconBtn>
              <S.IconBtn isLike={false}>
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
            profileImage={loginUser.profileImage}
          />

          <S.CommentContainer>
            {detailData?.comments.map(comment => (
              <Comment
                key={comment.id}
                setDetailData={setDetailData}
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
