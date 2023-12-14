import { useEffect, useState } from 'react';

import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';

import { CertificatePageItem } from './CertificatePageItem/CertificatePageItem';
import * as S from './CertificatePageList.styles';
import { CertificatePageSearch } from './CertificatePageSearch/CertificatePageSearch';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

export const CertificatePageList = () => {
  const { menuName } = useParams();
  const userId = useLoaderData() as { id: string };
  const [certificateList, setCertificateList] = useState<Certificate[]>([]);
  const [certificate, setCertificate] = useState<string>();
  const [keyword, setKeyword] = useState<string>();
  const searchedCertificates = certificateList.map(el => el.title);

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [mainCategory, setMainCategory] = useState<string>();

  useEffect(() => {
    selectedKeyword.forEach(el => {
      if (el.path) {
        setMainCategory(el.id);
        setKeyword(el.title);
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
          <CertificatePageSearch
            keyword={keyword}
            searchedCertificates={searchedCertificates}
            certificate={certificate}
            setCertificate={setCertificate}
          />
          {certificateList.map(el => (
            <CertificatePageItem
              key={el.id}
              mainImage={el.mainImage}
              location='page'
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
