import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Language } from 'types/language.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { arrayToString } from 'components/commons/utils/arrayToString';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { LanguagePageItem } from './LanguageInfo/LanguagePageItem';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

export const LanguagePageList = () => {
  const { menuName } = useParams();
  const [languageList, setLanguageList] = useState<Language[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;
  const userId = useLoaderData() as { id: string };

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [classify, setClassify] = useState<string>();
  const [test, setTest] = useState<string[]>([]);

  console.log(selectedKeyword);

  useEffect(() => {
    const updatedTest: string[] = [];

    selectedKeyword.forEach(el => {
      setClassify(el.path);
      updatedTest.push(el.id);
    });
    setTest(updatedTest);
  }, [selectedKeyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
          classify: classify,
          test: arrayToString(test),
        };

        const res = await requestCrawlingData(menuName as string, queries);
        const totalCount = await requestCrawlingTotalCount(menuName as string);
        setLanguageList(res.data.data as Language[]);
        setTotalCount(totalCount.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [menuName, getPageParam, userId, classify, test]);

  return (
    <>
      {languageList.length !== 0 ? (
        <>
          <LanguageContainer>
            {languageList.map(el => (
              <LanguagePageItem
                key={el.id}
                id={el.id}
                title={el.title}
                homePage={el.homePage}
                examDate={el.examDate}
                openDate={el.openDate}
                closeDate={el.closeDate}
                isScrap={el.isScrap}
              />
            ))}
          </LanguageContainer>
          <MenuPagination
            currentPage={currentPage}
            totalItemsCount={totalCount}
            itemsPerPage={12}
          />
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
};

const LanguageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 21px;
`;
