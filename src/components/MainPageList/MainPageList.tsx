import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useLoaderData, useLocation } from 'react-router-dom';

import { mainCrawlingData } from 'apis/mainCrawling';
import { CardList } from 'components/CardList/CardList';
import { PostList } from 'components/PostList/PostList';

import * as S from './mainPageList.style';

export const MainPageList = () => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const homeCardList = useContext(HomeCardListContext);
  const userId = useLoaderData() as { id: string | null };

  useEffect(() => {
    setIsLoad(false);

    (async () => {
      if (userId) {
        try {
          const res = await mainCrawlingData(homeCardList?.getParams, userId.id);
          setData(res.data.data);
          setIsLoad(true);
        } catch (error) {
          console.error(error);
          setIsLoad(true);
        }
      } else {
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
      }
    })();
  }, [homeCardList?.getParams]);

  const { search } = useLocation();
  const selectCommunity = search.includes('community');
  const selectCertificate = search.includes('qnet');

  return (
    <S.CardListWrapper>
      {selectCertificate || selectCommunity ? (
        <PostList data={data} selectCertificate={selectCertificate} isLoad={isLoad} />
      ) : (
        <CardList
          data={data}
          isChangeInfoLayout={homeCardList?.getParams === 'intern' ? true : false}
          isLoad={isLoad}
        />
      )}
    </S.CardListWrapper>
  );
};
