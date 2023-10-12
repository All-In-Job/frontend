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

function CertificateItem({ title, institution, implNm, scrap, view = 0 }: Certificate) {
  return (
    <S.CertificateListContainer>
      <S.CertificateInfo>
        <S.Image />
        <S.CertificateInfoText>
          <S.Title>{title}</S.Title>
          <S.Bottom>
            <S.Path>
              {'관련부처 : '}
              {implNm}
            </S.Path>
            <S.Path>
              {'시행기관 : '}
              {institution}
            </S.Path>
          </S.Bottom>
        </S.CertificateInfoText>
      </S.CertificateInfo>
      <S.CountWrapper>
        <S.Count>
          <S.BookmarkIcon />
          {scrap}
        </S.Count>
        <S.HorizontalIcon />
        <S.Count>
          <S.ViewIcon />
          {view}
        </S.Count>
        <S.BookmarkBtn>
          <S.SolidBookmarkIcon />
        </S.BookmarkBtn>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
}

export default CertificateItem;
