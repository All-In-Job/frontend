import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';

import { CertificatePageItem } from './CertificateInfo/CertificatePageItem';
import * as S from './CertificatePageList.styles';

export const CertificatePageList = () => {
  const { menuName } = useParams();

  const [certificateList, setCertificateList] = useState<Certificate[]>([]);

  const queries = {
    path: menuName,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await requestCrawlingData(menuName as string, queries);
        setCertificateList(res.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName]);

  return (
    <S.List>
      {certificateList.map(el => (
        <CertificatePageItem
          image={el.image}
          location='page'
          key={el.id}
          id={el.id}
          title={el.title}
          institution={el.institution}
          relatedDepartment={el.relatedDepartment}
          scrap={el.scrap}
          view={el.view}
          examSchedules={el.examSchedules}
        />
      ))}
    </S.List>
  );
};
