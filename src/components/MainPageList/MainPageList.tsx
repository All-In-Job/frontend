import { useContext, useEffect, useState } from 'react';

import { isAxiosError } from 'axios';
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
      try {
        if (userId) {
          const res = await mainCrawlingData(homeCardList?.getParams, userId.id);
          setData(res.data.data);
          setIsLoad(true);
        } else {
          const result = await mainCrawlingData(homeCardList?.getParams, null);
          setData(result.data.data);
          setIsLoad(true);
        }
      } catch (error) {
        if (isAxiosError(error)) throw new Error(error.response?.data);
      }
    })();
  }, [homeCardList?.getParams]);

  const { search } = useLocation();
  const selectCommunity = search.includes('community');
  const selectCertificate = search.includes('qnet');

  return (
    <S.CardListWrapper>
      {selectCertificate || selectCommunity ? (
        <PostList
          data={data}
          getParams={homeCardList?.getParams}
          selectCertificate={selectCertificate}
          isLoad={isLoad}
        />
      ) : (
        <CardList
          data={data}
          getParams={homeCardList?.getParams}
          isChangeInfoLayout={homeCardList?.getParams === 'intern' ? true : false}
          isLoad={isLoad}
        />
      )}
    </S.CardListWrapper>
  );
};
