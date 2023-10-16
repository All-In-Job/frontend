// import { useState } from 'react';

import { Link } from 'react-router-dom';

import * as S from './LanguageStudy.styles';

const LanguageStudy = () => {
  // const [expected, setExpected] = useState(false);
  const now = new Date('2023.10.25');
  const start = new Date('2023.10.25');
  // const end = new Date('2023.10.31');

  console.log(now > start);

  // const getTimeDiffString = ({startDate, endDate}:number) => {
  //   const now = new Date();
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);
  // };

  return (
    <S.LanguageStudyContainer>
      <S.LanguageStudyWrapper>
        <S.TextBox>
          <S.TagWrapper>
            <S.Tag>
              <S.Before>접수예정</S.Before>
              <span>접수중</span>
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
        {start >= now ? (
          <S.Btn>{`2023.06.25 접수예정`}</S.Btn>
        ) : (
          <S.AcceptBtn>접수하기</S.AcceptBtn>
        )}
      </S.LanguageStudyWrapper>
    </S.LanguageStudyContainer>
  );
};

export default LanguageStudy;
