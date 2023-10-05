import { useEffect, useState } from 'react';

import axios from 'axios';

import * as S from './ActivityList.style';
import { IGetActivityData } from './api';

interface ActivityCardProps {
  path: string;
}

const ActivityCardList = ({ path }: ActivityCardProps) => {
  const [activityData, setActivityData] = useState<IGetActivityData>();

  const ACTIVITY_API_URL = import.meta.env.VITE_API_CRAWLING + `?path=${path}`;

  useEffect(() => {
    axios.get(ACTIVITY_API_URL).then(response => {
      setActivityData(response.data);
    });
  }, []);

  const [bookMark, setBookMark] = useState(false);

  const onBookMark = () => setBookMark(prev => !prev);

  return (
    <S.ActivityCardListWrap>
      {activityData &&
        activityData.data.slice(0, 12).map(item => (
          <S.ActivityCard key={item.id}>
            <S.Img src={item.mainImage} />
            <S.IconWrap onClick={onBookMark}>
              <S.BookmarkIcon data-ispick={bookMark} />
            </S.IconWrap>
            <S.TextBox>
              <S.Enterprise>{item.enterprise}</S.Enterprise>
              <S.Title>{item.title}</S.Title>
            </S.TextBox>
            <S.Type>IT프로그래밍</S.Type>
          </S.ActivityCard>
        ))}
    </S.ActivityCardListWrap>
  );
};

export default ActivityCardList;
