import { Certificate } from 'types/certificate.type';

import * as S from './CertificateExamSchedule.style';

const tableData = {
  primary: '구분',
  secondary: `필기원서접수(휴일제외)`,
  tertiary: '필기시험',
  quaternary: '필기합격발표일',
  quinary: '실기원서접수(휴일제외)',
  senary: '실기시험',
  septenary: '최종합격발표일',
};

type Props = Omit<
  Certificate,
  | 'id'
  | 'title'
  | 'relatedDepartment'
  | 'scrap'
  | 'view'
  | 'institution'
  | 'mainImage'
  | 'enTitle'
  | 'isScrap'
  | 'path'
>;

export const CertificateExamSchedule = ({ examSchedules }: Props) => {
  return (
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
        {examSchedules.map(el => {
          return (
            <S.SecondaryTr>
              <S.Tb>{el.turn}</S.Tb>
              <S.Tb>{el.wtReceipt}</S.Tb>
              <S.Tb>{el.wtDday}</S.Tb>
              <S.Tb>{el.wtResultDay}</S.Tb>
              <S.Tb>{el.ptReceipt}</S.Tb>
              <S.Tb>{el.ptDday}</S.Tb>
              <S.Tb>{el.resultDay}</S.Tb>
            </S.SecondaryTr>
          );
        })}
      </tbody>
    </S.Table>
  );
};
