import * as S from './CertificateList.styles';

// type ExamSchedule = {
//   id: string;
//   turn: string;
//   wtReceipt: string;
//   wtDday: string;
//   wtResultDay: string;
//   ptReceipt: string;
//   ptDday: string;
//   resultDay: string;
// };

type Certificate = {
  title: string;
  engJmNm?: string | null;
  institution: string;
  implNm: string;
  scrap: number;
  view: number;
  // examSchedules: ExamSchedule[];
};

function CertificateList({ title, institution, implNm, scrap, view }: Certificate) {
  return (
    <S.CertificateListContainer>
      <S.CertificateInfo>
        <S.Image />
        <S.Title>{title}</S.Title>
        <S.Bottom>
          <S.Path>{institution}</S.Path>
          <S.Path>{implNm}</S.Path>
        </S.Bottom>
      </S.CertificateInfo>
      <S.CountWrapper>
        <S.Count>
          <S.ViewIcon />
          {view}
        </S.Count>
        <S.HorizontalIcon />
        <S.Count>
          <S.BookmarkIcon />
          {scrap}
        </S.Count>
        <S.BookmarkBtn>
          <S.SolidBookmarkIcon />
        </S.BookmarkBtn>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
}

export default CertificateList;
