import * as S from './CertificateExamInfo.styles';

const tableData = {
  primary: '구분',
  secondary: `필기원서접수(휴일제외)`,
  tertiary: '필기시험',
  quaternary: '필기합격발표일',
  quinary: '실기원서접수(휴일제외)',
  senary: '실기시험',
  septenary: '최종합격발표일',
};

export const CertificateExamInfo = () => {
  return (
    <>
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
        <tfoot>
          <S.SecondaryTr>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
            <S.Th>Hello, world</S.Th>
          </S.SecondaryTr>
        </tfoot>
      </S.Table>
    </>
  );
};
