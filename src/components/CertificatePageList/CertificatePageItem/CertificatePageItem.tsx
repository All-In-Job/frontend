import { CertificateItemProps } from 'types/certificate.type';

import CertificateItem from 'components/CertificateItem/CertificateItem';

import * as S from './CertificatePageItem.styles';

const tableData = {
  primary: '구분',
  secondary: `필기원서접수(휴일제외)`,
  tertiary: '필기시험',
  quaternary: '필기합격발표일',
  quinary: '실기원서접수(휴일제외)',
  senary: '실기시험',
  septenary: '최종합격발표일',
};

export const CertificatePageItem = ({
  id,
  title,
  institution,
  relatedDepartment,
  scrap,
  view,
  examSchedules,
  image,
}: CertificateItemProps) => {
  return (
    <S.CertificateInfo to={id}>
      <S.Container>
        <S.Title>자격증 정보</S.Title>
        <S.CertificateItemWrapper>
          <CertificateItem
            id={id}
            location='page'
            title={title}
            institution={institution}
            relatedDepartment={relatedDepartment}
            scrap={scrap}
            view={view}
            image={image}
            examSchedules={examSchedules}
          />
        </S.CertificateItemWrapper>
      </S.Container>

      <S.Container>
        <S.Title>시험정보 정보</S.Title>
        <S.Table>
          <thead>
            <S.Tr>
              <S.Th>{tableData.primary}</S.Th>
              <S.Th>{tableData.secondary}</S.Th>
              <S.Th>{tableData.tertiary}</S.Th>
              <S.Th>{tableData.quaternary}</S.Th>
              <S.Th>{tableData.quinary}</S.Th>
              <S.Th>{tableData.senary}</S.Th>
              <S.Th>{tableData.septenary}</S.Th>
            </S.Tr>
          </thead>
          <tbody>
            <S.SecondaryTr>
              <S.Tb>{examSchedules[0].turn}</S.Tb>
              <S.Tb>{examSchedules[0].wtReceipt}</S.Tb>
              <S.Tb>{examSchedules[0].wtDday}</S.Tb>
              <S.Tb>{examSchedules[0].wtResultDay}</S.Tb>
              <S.Tb>{examSchedules[0].ptReceipt}</S.Tb>
              <S.Tb>{examSchedules[0].ptDday}</S.Tb>
              <S.Tb>{examSchedules[0].resultDay}</S.Tb>
            </S.SecondaryTr>
          </tbody>
        </S.Table>
      </S.Container>
    </S.CertificateInfo>
  );
};
