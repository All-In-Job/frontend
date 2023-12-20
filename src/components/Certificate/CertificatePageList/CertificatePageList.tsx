import { useEffect, useState } from 'react';

import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData, requestCrawlingTitleData } from 'apis/crawling';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';

import { CertificatePageItem } from './CertificatePageItem/CertificatePageItem';
import * as S from './CertificatePageList.styles';
import { CertificatePageSearch } from './CertificatePageSearch/CertificatePageSearch';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

export const CertificatePageList = () => {
  const userId = useLoaderData() as { id: string };
  const { menuName } = useParams();
  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [certificateList, setCertificateList] = useState<Certificate[]>([]);
  const [certificateTitleList, setCertificateTitleList] = useState<Certificate[]>([]);
  const [certificate, setCertificate] = useState<string | undefined>(undefined);
  const [mainCategory, setMainCategory] = useState<string | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>('');
  const searchedCertificates = certificateTitleList.map(el => el.title);

  useEffect(() => {
    if (selectedKeyword.length !== 0) {
      selectedKeyword.forEach(el => {
        setMainCategory(el.id);
        setKeyword(el.title);
        setCertificate(undefined);
      });
    } else {
      setMainCategory(undefined);
      setCertificate(undefined);
      setKeyword('');
    }
  }, [selectedKeyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          id: userId?.id,
          mainCategory: mainCategory,
          title: certificate,
        };

        const res = await requestCrawlingData(menuName as string, queries);
        const title = await requestCrawlingTitleData(menuName as string, mainCategory);
        setCertificateList(res.data.data as Certificate[]);
        setCertificateTitleList(title.data.data as Certificate[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [menuName, userId, mainCategory, certificate]);

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
              path={`/${menuName}/detail/${el.id}`}
            />
          ))}
        </S.List>
      ) : (
        <NoResult />
      )}
    </>
  );
};
