import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Language } from 'types/language.type';

import { requestCrawlingData } from 'apis/crawling';

import { LanguagePageItem } from './LanguageInfo/LanguagePageItem';

export const LanguagePageList = () => {
  const { menuName } = useParams();

  const [languageList, setLanguageList] = useState<Language[]>([]);

  const queries = {
    path: menuName,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await requestCrawlingData(menuName as string, queries);
        setLanguageList(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName]);

  return (
    <List>
      {languageList.map(el => (
        <LanguagePageItem
          id={el.id}
          test={el.test}
          homPage={el.homPage}
          examDate={el.examDate}
          openDate={el.openDate}
          closeDate={el.closeDate}
          Dday={el.Dday}
        />
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-family: Bold;
`;
