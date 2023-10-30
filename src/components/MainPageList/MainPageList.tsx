import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useLocation } from 'react-router-dom';

import { CardList } from 'components/CardList/CardList';
import { PostList } from 'components/PostList/PostList';

import * as S from './mainPageList.style';

export const MainPageList = () => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const homeCardList = useContext(HomeCardListContext);

  useEffect(() => {
    setIsLoad(false);

    const crawlingData = async () => {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_API_MAIN_CRAWLING}${homeCardList?.getParams}`,
        );

        setData(result.data.data);
        setIsLoad(true);
      } catch (error) {
        console.error(error);
        setIsLoad(true);
      }
    };
    crawlingData();
  }, [homeCardList?.getParams]);

  const { search } = useLocation();
  const selectCommunity = search.includes('community');
  const selectCertificate = search.includes('qnet');

  return (
    <S.CardListWrapper>
      {isLoad ? (
        selectCertificate || selectCommunity ? (
          <PostList data={data} selectCertificate={selectCertificate} />
        ) : (
          <CardList data={data} />
        )
      ) : (
        <p>Loading...</p>
      )}
    </S.CardListWrapper>
  );
};
