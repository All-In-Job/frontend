// import React from 'react';

// import { useState } from 'react';

// import { Link } from 'react-router-dom';

import * as S from './CertificateList.styles';

type CommunityListProps = {
  user: UserInfo;
  dateCreation: string;
  title: string;
  path: string;
  viewCount: string;
  likeCount: string;
  scrapCount: string;
};

type UserInfo = {
  nickname: string;
};

function CertificateList(props: CommunityListProps) {
  // const today = new Date().toISOString().replace('T', ' ').substring(0, 19);
  // const dateCreation = props.dateCreation.replace('T', ' ').substring(0, 19);

  // console.log(today, dateCreation);

  return (
    <S.CommunityListContainer>
      <S.UserInfo>
        <S.Nickname>
          <S.NicknameIcon />
          {props.user.nickname}
        </S.Nickname>
        <S.Time>{props.dateCreation + '분전'}</S.Time>
      </S.UserInfo>
      <S.Title>{props.title}</S.Title>
      <S.Bottom>
        <S.Path>{props.path}</S.Path>
        <S.CountWrapper>
          <S.Count>
            <S.ViewIcon />
            {props.viewCount}
          </S.Count>
          <S.Count>
            <S.BookmarkIcon />
            {props.scrapCount}
          </S.Count>
          <S.Count>
            <S.LikeIcon />
            {props.likeCount}
          </S.Count>
        </S.CountWrapper>
      </S.Bottom>
    </S.CommunityListContainer>
  );
}

export default CertificateList;
