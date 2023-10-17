import { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';
import { useLocation } from 'react-router-dom';

import CertificateItem from 'components/CertificateList/CertificateItem';
import { CertificatePageList } from 'components/CertificatePageList/CertificatePageList';
import PostCard from 'components/commons/PostCard/PostCard';
import CommunityItem from 'components/CommunityItem/CommunityItem';

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

  const { search } = useLocation();
  const selectCommunity = search.includes('community');
  const selectCertificate = search.includes('qnet');

  return (
    <S.CardListWrapper>
      <CertificatePageList />
      {selectCertificate || selectCommunity ? (
        <section>
          {data.map(el => {
            return selectCertificate ? (
              <CertificateItem
                key={el.id}
                title={el.title}
                institution={el.institution}
                implNm={'관련부처'}
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
      )}
    </S.CardListWrapper>
  );
};
