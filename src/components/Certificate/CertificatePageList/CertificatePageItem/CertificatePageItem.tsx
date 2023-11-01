import { CertificateItemProps, ExamSchedule } from 'types/certificate.type';

import { CertificateExamSchedule } from 'components/Certificate/CertificateExamSchedule/CertificateExamSchedule';
import CertificateItem from 'components/Certificate/CertificateItem/CertificateItem';

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
  const pathProps = (data: ExamSchedule[]) => {
    return data && examSchedules[0];
  };

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
          id={pathProps(examSchedules)?.id}
          key={pathProps(examSchedules)?.id}
          turn={pathProps(examSchedules)?.turn}
          wtReceipt={pathProps(examSchedules)?.wtReceipt}
          wtDday={pathProps(examSchedules)?.wtDday}
          wtResultDay={pathProps(examSchedules)?.wtResultDay}
          ptReceipt={pathProps(examSchedules)?.ptReceipt}
          ptDday={pathProps(examSchedules)?.ptDday}
          resultDay={pathProps(examSchedules)?.resultDay}
        />
      </S.Container>
    </S.CertificateInfo>
  );
};