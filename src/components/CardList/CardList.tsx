import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';
import { useLocation } from 'react-router-dom';

import CertificateList from 'components/CertificateList/CertificateList';
import PostCard from 'components/commons/PostCard/PostCard';
import CommunityList from 'components/CommunityList/CommunityList';

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
    console.log(`${import.meta.env.VITE_API_MAIN_CRAWLING}${homeCardList?.getParams}`);
  }, [homeCardList?.getParams]);

  const { search } = useLocation();
  const selectCommunity = search.includes('community');
  const selectCertificate = search.includes('qnet');

  return (
    <S.CardListWrapper>
      {selectCertificate || selectCommunity ? (
        <section>
          {data.map(el => {
            return selectCertificate ? (
              <CertificateList
                key={el.id}
                jmNm={el.jmNm}
                instiNm={el.instiNm}
                implNm={el.implNm}
                scrapCount={0}
                viewCount={0}
              />
            ) : (
              <CommunityList
                key={idx}
                user={el.user}
                dateCreation={el.createAt}
                title={el.title}
                path={el.path}
                viewCount={el.view}
                likeCount='1234'
                scrapCount='4234'
              />
            );
          })}
        </section>
      ) : (
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
      )}
      {/* <section>
        {data.map((el, idx) => {
          return (
            <CommunityList
              key={idx}
              user={el.user}
              dateCreation={el.createAt}
              title={el.title}
              path={el.path}
              viewCount={el.view}
              likeCount='1234'
              scrapCount='4234'
            />
          );
        })}
      </section> */}
    </S.CardListWrapper>
  );
};
