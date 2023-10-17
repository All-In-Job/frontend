import { useState } from 'react';

import { Link } from 'react-router-dom';

import * as S from './LanguageStudy.styles';

type TGetData = {
  data: LanguageProps[];
};

type LanguageProps = {
  id: string;
  path: string;
  test: string;
  homPage: string;
  examDate: string;
  openDate: string;
  closeDate: string;
  Dday: string;
};

const LanguageStudy = (data: TGetData) => {
  const [bookmark, setBookmark] = useState(false);

  const onBookmark = () => {
    setBookmark(prev => !prev);
  };

  const now = new Date();

  const timestamp = (date: string) => {
    const weekday = ['일', '월', '화', '수', '목', '금', '토'];
    const currentDate = new Date(date);

    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hour = ('0' + currentDate.getHours()).slice(-2);
    const minute = ('0' + currentDate.getMinutes()).slice(-2);
    const week = weekday[currentDate.getDay()];

    return `${year}.${month}.${day} (${week}) ${hour}:${minute}`;
  };

  return (
    <S.LanguageStudyContainer>
      {data.data.map(el => {
        return (
          <S.LanguageStudyWrapper key={el.id}>
            <S.TextBox>
              <S.TagWrapper>
                <S.Tag>
                  {new Date(el.openDate) > now ? (
                    <S.Disabled>접수예정</S.Disabled>
                  ) : (
                    <S.Activate>접수중</S.Activate>
                  )}
                  {el.Dday === 'D-3' ? <S.Imminent>마감임박</S.Imminent> : null}
                </S.Tag>
                <Link to={'/login'} onClick={onBookmark}>
                  <S.BookmarkIcon data-ispick={bookmark} />
                </Link>
              </S.TagWrapper>
              <S.Title>{el.test}</S.Title>
              <S.Schedule>
                <S.ExamDate>{`시험일시 : ${timestamp(el.examDate)}`}</S.ExamDate>
                <S.Deadline>{`접수마감 : ${timestamp(el.closeDate)}`}</S.Deadline>
              </S.Schedule>
            </S.TextBox>
            {new Date(el.openDate) > now ? (
              <S.DisabledBtn>{`${timestamp(el.openDate).slice(0, 10)} 접수예정`}</S.DisabledBtn>
            ) : (
              <S.ActivateBtn>
                <Link to={`${el.homPage}`}>접수하기</Link>
              </S.ActivateBtn>
            )}
          </S.LanguageStudyWrapper>
        );
      })}
    </S.LanguageStudyContainer>
  );
};

export default LanguageStudy;
