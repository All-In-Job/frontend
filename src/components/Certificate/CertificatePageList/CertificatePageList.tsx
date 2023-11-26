import { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';

import { CertificatePageItem } from './CertificatePageItem/CertificatePageItem';
import * as S from './CertificatePageList.styles';

export const CertificatePageList = () => {
  const { menuName } = useParams();

  const [certificateList, setCertificateList] = useState<Certificate[]>([]);
  const userId = useLoaderData() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          id: userId?.id,
        };

        const res = await requestCrawlingData(menuName as string, queries);
        setCertificateList(res.data.data as Certificate[]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [menuName, userId]);

  return (
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
  );
};
