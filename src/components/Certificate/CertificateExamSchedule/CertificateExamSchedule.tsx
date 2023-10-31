import { ExamSchedule } from 'types/certificate.type';

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

type Props = ExamSchedule & { key: string };

export const CertificateExamSchedule = ({
  turn,
  wtReceipt,
  wtDday,
  wtResultDay,
  ptReceipt,
  ptDday,
  resultDay,
}: Props) => {
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
        <S.SecondaryTr>
          <S.Tb>{turn}</S.Tb>
          <S.Tb>{wtReceipt}</S.Tb>
          <S.Tb>{wtDday}</S.Tb>
          <S.Tb>{wtResultDay}</S.Tb>
          <S.Tb>{ptReceipt}</S.Tb>
          <S.Tb>{ptDday}</S.Tb>
          <S.Tb>{resultDay}</S.Tb>
        </S.SecondaryTr>
      </tbody>
    </S.Table>
  );
};
