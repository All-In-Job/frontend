import { CertificateItemProps } from 'types/certificate.type';

import { CertificateExamSchedule } from 'components/CertificateExamSchedule/CertificateExamSchedule';
import CertificateItem from 'components/CertificateItem/CertificateItem';

import * as S from './CertificatePageItem.styles';

type Props = Omit<CertificateItemProps, 'enTitle'>;

export const CertificatePageItem = ({
  id,
  title,
  institution,
  relateDepartment,
  scrap,
  view,
  examSchedules,
  mainImage,
}: Props) => {
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
            relateDepartment={relateDepartment}
            scrap={scrap}
            view={view}
            mainImage={mainImage}
            examSchedules={examSchedules}
          />
        </S.CertificateItemWrapper>
      </S.Container>

      <S.Container>
        <S.Title>시험정보 정보</S.Title>
        <CertificateExamSchedule
          id={examSchedules[0].id}
          key={examSchedules[0]?.id}
          turn={examSchedules[0]?.turn}
          wtReceipt={examSchedules[0]?.wtReceipt}
          wtDday={examSchedules[0]?.wtDday}
          wtResultDay={examSchedules[0]?.wtResultDay}
          ptReceipt={examSchedules[0]?.ptReceipt}
          ptDday={examSchedules[0]?.ptDday}
          resultDay={examSchedules[0]?.resultDay}
        />
      </S.Container>
    </S.CertificateInfo>
  );
};
