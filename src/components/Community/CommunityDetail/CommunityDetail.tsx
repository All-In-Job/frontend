import { ChangeEvent, useEffect, useState } from 'react';

import { ReactComponent as HorizontalIcon } from 'assets/icons/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from 'assets/icons/icon-view.svg';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { submitComment } from 'apis/comment';
import { requestDetailCrawlingApiData } from 'apis/detailCommunity';
import { patchToggleLike } from 'apis/toggleLike';
import { Count } from 'components/commons/Count/Count';
import { ProfileImage } from 'components/Community/ProfileImage/ProfileImage';

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
  const [comment, setComment] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingApiData(detailId as string);
        if (res) {
          setDetailData(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleToggleLike = async () => {
    try {
      const res = await patchToggleLike(detailData?.id as string);

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
    console.log(e.target.value);
  };

  const submitCommentData = async () => {
    if (comment === '') return;
    const commentData = { id: detailData?.id as string, comment };

    try {
      const res = await submitComment(commentData);
      console.log(res);
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
        <S.CommentInputContainer>
          <ProfileImage />
          <S.CommentInput placeholder='댓글을 남겨보세요!' onChange={onChangeComment} />
          <S.SubmitButton type='button' onClick={submitCommentData}>
            등록
          </S.SubmitButton>
        </S.CommentInputContainer>
        <S.CommentContainer>
          {detailData?.comments.map(ele => (
            <Comment key={ele.id} nickname={ele.nickname} comment={ele.comment} date={ele.date} />
          ))}
        </S.CommentContainer>
      </S.Footer>
    </S.Container>
  );
};
