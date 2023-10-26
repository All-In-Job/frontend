import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Language } from 'types/language.type';

import * as S from './LanguagePageItem.styles';

export const LanguagePageItem = ({
  id,
  test,
  homPage,
  examDate,
  openDate,
  closeDate,
}: Language) => {
  const now = new Date();
  const close = new Date(closeDate);
  const timeDiff = close.getTime() - now.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const Dday = Math.floor(timeDiff / oneDay);
  const [bookmark, setBookmark] = useState(false);

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

  const onBookmark = () => {
    setBookmark(prev => !prev);
  };

  return (
    <S.LanguageContainer>
      <S.LanguageWrapper key={id}>
        <S.TextBox>
          <S.TagWrapper>
            <S.Tag>
              {new Date(openDate) > now ? (
                <S.Disabled>접수예정</S.Disabled>
              ) : (
                <S.Activate>접수중</S.Activate>
              )}
              {Dday === 3 ? <S.Imminent>마감임박</S.Imminent> : null}
            </S.Tag>
            <Link to={'/login'} onClick={onBookmark}>
              <S.BookmarkIcon data-ispick={bookmark} />
            </Link>
          </S.TagWrapper>
          <S.Title>{test}</S.Title>
          <S.Schedule>
            <S.ExamDate>{`시험일시 : ${timestamp(examDate)}`}</S.ExamDate>
            <S.Deadline>{`접수마감 : ${timestamp(closeDate)}`}</S.Deadline>
          </S.Schedule>
        </S.TextBox>
        {new Date(openDate) > now ? (
          <S.DisabledBtn>{`${timestamp(openDate).slice(0, 10)} 접수예정`}</S.DisabledBtn>
        ) : (
          <S.ActivateBtn>
            <Link to={`${homPage}`}>접수하기</Link>
          </S.ActivateBtn>
        )}
      </S.LanguageWrapper>
    </S.LanguageContainer>
  );
};
