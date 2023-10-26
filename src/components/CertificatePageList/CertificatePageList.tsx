import { useEffect, useState } from 'react';

// import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestCrawlingData } from 'apis/crawling';

import { CertificatePageItem } from './CertificateInfo/CertificatePageItem';
import * as S from './CertificatePageList.styles';

// const data = [
//   {
//     id: 'TxeBIosBk9tppZrQDufq',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '산업통상자원부',
//     title: '시각디자인기사',
//   },
//   {
//     id: 'QheBIosBk9tppZrQDuep',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '보건복지부',
//     title: '미용사(메이크업)',
//   },
//   {
//     id: 'RBeBIosBk9tppZrQDuey',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '식품의약품안전처',
//     title: '식품가공기능사',
//   },
//   {
//     id: 'UBeBIosBk9tppZrQDufq',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '산업통상자원부',
//     title: '제품디자인기술사',
//   },
//   {
//     id: 'UReBIosBk9tppZrQDufq',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '환경부',
//     title: '폐기물처리기술사',
//   },
//   {
//     id: 'PxeBIosBk9tppZrQDueh',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '보건복지부',
//     title: '미용사(일반)',
//   },
//   {
//     id: 'TBeBIosBk9tppZrQDufp',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '고용노동부',
//     title: '기계설계기사',
//   },
//   {
//     id: 'TReBIosBk9tppZrQDufq',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '산업통상자원부',
//     title: '제품디자인기사',
//   },
//   {
//     id: 'RxeBIosBk9tppZrQDue-',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '고용노동부',
//     title: '직업상담사1급',
//   },
//   {
//     id: 'QReBIosBk9tppZrQDueo',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '산업통상자원부',
//     title: '신재생에너지발전설비기능사(태양광)',
//   },
//   {
//     id: 'YfmBIosBSJ-8qZb7DuLs',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '산업통상자원부',
//     title: '에너지관리기능장',
//   },
//   {
//     id: 'SheBIosBk9tppZrQDuff',
//     institution: '한국산업인력공단',
//     scrap: 0,
//     view: 0,
//     relatedDepartment: '환경부',
//     title: '소음진동기사',
//   },
// ];

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
