import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Language } from 'types/language.type';

import { requestCrawlingData } from 'apis/crawling';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { LanguagePageItem } from './LanguageInfo/LanguagePageItem';

export const LanguagePageList = () => {
  const { menuName } = useParams();
  const [languageList, setLanguageList] = useState<Language[]>([]);
  const { getPageParam, increasePage, decreasePage } = useControlPageParam();

  useEffect(() => {
    const queries = {
      path: menuName,
      page: getPageParam,
    };

    (async () => {
      try {
        const res = await requestCrawlingData(menuName as string, queries);
        setLanguageList(res.data.data as Language[]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName]);

  return (
    <LanguageContainer>
      <button onClick={increasePage}>+</button>
      <button onClick={decreasePage}>-</button>
      {languageList.map(el => (
        <LanguagePageItem
          key={el.id}
          id={el.id}
          title={el.title}
          homePage={el.homePage}
          examDate={el.examDate}
          openDate={el.openDate}
          closeDate={el.closeDate}
        />
      ))}
    </LanguageContainer>
  );
};

const LanguageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 21px;
`;
