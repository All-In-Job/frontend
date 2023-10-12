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
  const dummyData = [
    {
      id: '자격증 id : adfhttwerqwrasxczx',
      jmNm: '자격증명 : 에너지산업기사',
      engJmNm: '자격증 영어명 : Engineer Energy Management or null',
      instiNm: '과련부처 : 통겨청',
      implNm: '시행기관 : 한국산업인력공단',
      examSchedules: [
        {
          id: '회차 id : adfhttwerqwrasxczx',
          turn: '회차 : 2023년정기기사4회',
          wtReceipt: '필기 접수 기간 : 2023.08.07~2023.08.10[빈자리접수:2023.08.27~2023.08.28]',
          wtDday: '필기 시험 날짜 : 2023.09.02~2023.09.17',
          wtResultDay: '필기 시험 발표 날짜 : 2023.09.22',
          ptReceipt: '실기 접수 기간 : 2023.09.04~2023.09.07빈자리접수:2023.10.01~2023.10.02',
          ptDday: '실기 시험 날짜 : 2023.10.07~2023.10.26',
          resultDay: '최종합격자 발표일 : 2023.11.15',
        },
      ],
    },
    {
      id: '자격증 id : adfhttwerqwrasxczx',
      jmNm: '자격증명 : 에너지산업기사',
      engJmNm: '자격증 영어명 : Engineer Energy Management or null',
      instiNm: '과련부처 : 통겨청',
      implNm: '시행기관 : 한국산업인력공단',
      examSchedules: [
        {
          id: '회차 id : adfhttwerqwrasxczx',
          turn: '회차 : 2023년정기기사4회',
          wtReceipt: '필기 접수 기간 : 2023.08.07~2023.08.10[빈자리접수:2023.08.27~2023.08.28]',
          wtDday: '필기 시험 날짜 : 2023.09.02~2023.09.17',
          wtResultDay: '필기 시험 발표 날짜 : 2023.09.22',
          ptReceipt: '실기 접수 기간 : 2023.09.04~2023.09.07빈자리접수:2023.10.01~2023.10.02',
          ptDday: '실기 시험 날짜 : 2023.10.07~2023.10.26',
          resultDay: '최종합격자 발표일 : 2023.11.15',
        },
      ],
    },
    {
      id: '자격증 id : adfhttwerqwrasxczx',
      jmNm: '자격증명 : 에너지산업기사',
      engJmNm: '자격증 영어명 : Engineer Energy Management or null',
      instiNm: '과련부처 : 통겨청',
      implNm: '시행기관 : 한국산업인력공단',
      examSchedules: [
        {
          id: '회차 id : adfhttwerqwrasxczx',
          turn: '회차 : 2023년정기기사4회',
          wtReceipt: '필기 접수 기간 : 2023.08.07~2023.08.10[빈자리접수:2023.08.27~2023.08.28]',
          wtDday: '필기 시험 날짜 : 2023.09.02~2023.09.17',
          wtResultDay: '필기 시험 발표 날짜 : 2023.09.22',
          ptReceipt: '실기 접수 기간 : 2023.09.04~2023.09.07빈자리접수:2023.10.01~2023.10.02',
          ptDday: '실기 시험 날짜 : 2023.10.07~2023.10.26',
          resultDay: '최종합격자 발표일 : 2023.11.15',
        },
      ],
    },
  ];

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
  console.log(selectCertificate, selectCommunity);

  return (
    <S.CardListWrapper>
      {selectCertificate || selectCommunity ? (
        <section>
          {dummyData.map(el => {
            return selectCertificate ? (
              <CertificateList
                id={el.id}
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
