import { useEffect, useState } from 'react';

import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';

import { CertificatePageItem } from './CertificatePageItem/CertificatePageItem';
import * as S from './CertificatePageList.styles';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

export const CertificatePageList = () => {
  const { menuName } = useParams();

  const [certificateList, setCertificateList] = useState<Certificate[]>([]);
  const userId = useLoaderData() as { id: string };

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [mainCategory, setMainCategory] = useState<string>();

  console.log(selectedKeyword);

  useEffect(() => {
    selectedKeyword.forEach(el => {
      if (el.path) {
        setMainCategory(el.id);
      }
    });
  }, [selectedKeyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          id: userId?.id,
          mainCategory: mainCategory,
        };

        const res = await requestCrawlingData(menuName as string, queries);
        setCertificateList(res.data.data as Certificate[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [menuName, userId, mainCategory]);

  return (
    <>
      {certificateList.length !== 0 ? (
        <S.List>
          {certificateList.map(el => (
            <CertificatePageItem
              mainImage={el.mainImage}
              location='page'
              key={el.id}
              id={el.id}
              title={el.title}
              institution={el.institution}
              relateDepartment={el.relateDepartment}
              scrap={el.scrap}
              view={el.view}
              examSchedules={el.examSchedules}
              type={el.type}
              isScrap={el.isScrap}
            />
          ))}
        </S.List>
      ) : (
        <NoResult />
      )}
    </>
  );
};
