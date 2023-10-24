import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useLocation } from 'react-router-dom';

import CertificateItem from 'components/CertificateItem/CertificateItem';
import PostCard from 'components/commons/PostCard/PostCard';
import CommunityItem from 'components/CommunityItem/CommunityItem';

import * as S from './CardList.style';

export const CardList = () => {
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
          <section>
            {data.map(el => {
              return selectCertificate ? (
                <CertificateItem
                  location={'main'}
                  key={el.id}
                  title={el.title}
                  institution={el.institution}
                  relatedDepartment={el.relatedDepartment}
                  scrap={el.scrap}
                  view={el.view}
                />
              ) : (
                <CommunityItem
                  key={el.id}
                  category={el.category}
                  title={el.title}
                  view={el.view}
                  like={el.likeCount}
                  comment={el.commentCount}
                  date={el.date}
                  user={el.user}
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
        )
      ) : (
        <p>Loading...</p>
      )}
    </S.CardListWrapper>
  );
};
