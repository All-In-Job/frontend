import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';

import Pagination from 'components/commons/Pagination/Pagination';
import PostCard from 'components/commons/PostCard/PostCard';

import * as S from './CardList.style';

export const CardList = () => {
  const [data, setData] = useState([]);
  const homeCardList = useContext(HomeCardListContext);

  useEffect(() => {
    const crawlingData = async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_CRAWLING}?path=${homeCardList?.getParams}&page=1`,
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
            />
          );
        })}
      </S.Section>
      <Pagination pageItemsCount={120} totalItemsCount={1230} />
    </S.CardListWrapper>
  );
};
