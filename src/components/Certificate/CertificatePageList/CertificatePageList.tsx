import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';

import { CertificatePageItem } from './CertificatePageItem/CertificatePageItem';
import * as S from './CertificatePageList.styles';

export const CertificatePageList = () => {
  const { menuName } = useParams();

  const [certificateList, setCertificateList] = useState<Certificate[]>([]);

  useEffect(() => {
    (async () => {
      if (menuName) {
        try {
          const res = await requestCrawlingData(menuName, {
            path: menuName,
          });
          setCertificateList(res.data.data as Certificate[]);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, [menuName]);

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
        />
      ))}
    </S.List>
  );
};
