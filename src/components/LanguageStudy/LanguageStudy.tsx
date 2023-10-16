// import { useState } from 'react';

import { Link } from 'react-router-dom';

import * as S from './LanguageStudy.styles';

const LanguageStudy = () => {
  const now = new Date();
  const open = new Date('2023.10.20 12:00');
  const close = new Date('2023.10.31 10:00');

  console.log(close, open);
  return (
    <S.LanguageStudyContainer>
      <S.LanguageStudyWrapper>
        <S.TextBox>
          <S.TagWrapper>
            <S.Tag>
              <S.Disabled>접수예정</S.Disabled>
              <S.Activate>접수중</S.Activate>
              <S.Imminent>마감임박</S.Imminent>
            </S.Tag>
            <Link to={'/login'}>
              <S.BookmarkIcon />
            </Link>
          </S.TagWrapper>
          <S.Title>TOEIC (Reading, Listening)</S.Title>
          <S.Schedule>
            <S.ExamDate>{`시험일시 : 2023.08.25 (일) 12:00`}</S.ExamDate>
            <S.Deadline>{`접수마감 : 2023.06.25 (월) 10:00`}</S.Deadline>
          </S.Schedule>
        </S.TextBox>
        {open > now ? (
          <S.DisabledBtn>{`2023.10.20 접수예정`}</S.DisabledBtn>
        ) : (
          <S.ActivateBtn>접수하기</S.ActivateBtn>
        )}
      </S.LanguageStudyWrapper>
    </S.LanguageStudyContainer>
  );
};

export default LanguageStudy;
