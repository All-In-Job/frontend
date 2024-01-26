import { Link } from 'react-router-dom';
import { Language } from 'types/language.type';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';

import * as S from './LanguagePageItem.styles';

export const LanguagePageItem = ({
  id,
  title,
  homePage,
  examDate,
  openDate,
  closeDate,
  isScrap,
}: Language) => {
  const now = new Date();
  const close = new Date(closeDate);
  const timeDiff = close.getTime() - now.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const Dday = Math.floor(timeDiff / oneDay);

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
    <S.LanguageWrapper key={id}>
      <S.TextBox>
        <S.TagWrapper>
          <S.Tag>
            {new Date(openDate) > now ? (
              <S.Disabled>접수예정</S.Disabled>
            ) : new Date(closeDate) > now ? (
              <S.Activate>접수중</S.Activate>
            ) : (
              <S.Disabled>접수마감</S.Disabled>
            )}
            {Dday > 0 && Dday < 4 && <S.Imminent>마감임박</S.Imminent>}
          </S.Tag>
          <ScrapButton id={id} isScrap={isScrap} fill={'primary'} />
        </S.TagWrapper>

        <S.Title>{title}</S.Title>

        <S.Schedule>
          <S.ExamDate>{`시험일시 : ${timestamp(examDate)}`}</S.ExamDate>
          <S.Deadline>{`접수마감 : ${timestamp(closeDate)}`}</S.Deadline>
        </S.Schedule>
      </S.TextBox>

      {new Date(openDate) > now ? (
        <S.DisabledBtn>{`${timestamp(openDate).slice(0, 10)} 접수예정`}</S.DisabledBtn>
      ) : new Date(closeDate) < now ? (
        <S.DisabledBtn>{`접수마감`}</S.DisabledBtn>
      ) : (
        <S.ActivateBtn>
          <Link to={`${homePage}`} target={'_blank'}>
            접수하기
          </Link>
        </S.ActivateBtn>
      )}
    </S.LanguageWrapper>
  );
};
