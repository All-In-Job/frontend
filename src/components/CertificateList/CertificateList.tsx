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
  id: string;
  jmNm: string;
  engJmNm?: string | null;
  instiNm: string;
  implNm: string;
  scrapCount: number;
  viewCount: number;
  // examSchedules: ExamSchedule[];
};

function CertificateList(props: Certificate) {
  return (
    <S.CertificateListContainer>
      <S.CertificateInfo>
        <S.Title>{props.jmNm}</S.Title>
        <S.Bottom>
          <S.Path>{props.instiNm}</S.Path>
          <S.Path>{props.implNm}</S.Path>
        </S.Bottom>
      </S.CertificateInfo>
      <S.CountWrapper>
        <S.Count>
          <S.ViewIcon />
          {props.viewCount}
        </S.Count>
        <S.HorizontalIcon />
        <S.Count>
          <S.BookmarkIcon />
          {props.scrapCount}
        </S.Count>
        <S.BookmarkBtn>
          <S.SolidBookmarkIcon />
        </S.BookmarkBtn>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
}

export default CertificateList;
