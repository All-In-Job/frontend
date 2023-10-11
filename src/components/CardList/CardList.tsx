import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';
import { useLocation, useMatch } from 'react-router-dom';

import CertificateList from 'components/CertificateList /CertificateList';
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
  }, [homeCardList?.getParams]);

  const location = useLocation();
  const CommunityPathMatch = useMatch('/?menu=community');
  console.log(location.search, CommunityPathMatch);

  return (
    <S.CardListWrapper>
      {location.search.includes('community') ? (
        <section>
          {data.map((el, idx) => {
            return location.search.includes('qnet') ? (
              <div>
                <CertificateList
                  key={idx}
                  user={el.user}
                  dateCreation={el.createAt}
                  title={el.title}
                  path={el.path}
                  viewCount={el.view}
                  likeCount='1234'
                  scrapCount='4234'
                />
              </div>
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
