import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLoaderData, useParams } from 'react-router-dom';
import { Language } from 'types/language.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { LanguagePageItem } from './LanguageInfo/LanguagePageItem';

export const LanguagePageList = () => {
  const { menuName } = useParams();
  const [languageList, setLanguageList] = useState<Language[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;
  const userId = useLoaderData() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
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
  }, [menuName, getPageParam, userId]);

  return (
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

      <MenuPagination currentPage={currentPage} totalItemsCount={totalCount} itemsPerPage={12} />
    </>
  );
};

const LanguageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 21px;
`;
