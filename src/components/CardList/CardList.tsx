import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';

import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './CardList.style';

export const CardList = () => {
  const [data, setData] = useState([]);
  const homeCardList = useContext(HomeCardListContext);

  useEffect(() => {
    const crawlingData = async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_MAIN_CRAWLING}${homeCardList?.getParams}`,
      );

      setData(result.data.data);
    };

    crawlingData();
  }, [homeCardList?.getParams]);

  return (
    <S.CardListWrapper>
      <S.Section>
        {data.map((el, idx) => {
          return (
            <PostCard
              key={idx}
              mainImage={el.mainImage}
              infoHost={el.enterprise}
              title={el.title}
              dateDday={el.Dday}
              dateCreation={el.applicationPeriod}
              scrapCount='4234'
              viewCount={el.view}
              location='111'
              isPickButton
              isPostCardTag
              index={idx}
            />
          );
        })}
      </S.Section>
    </S.CardListWrapper>
  );
};
