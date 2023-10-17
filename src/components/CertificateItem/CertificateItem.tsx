import * as S from './CertificateItem.styles';

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
  relatedDepartment: string;
  scrap: number;
  view: number;
  location: 'main' | 'page';
  institution: string;
  // examSchedules: ExamSchedule[];
};

// {
//   "data": [
//     {
//       "id": "자격증 id : adfhttwerqwrasxczx",
//       "title": "자격증명 : 에너지산업기사",
//       "view": 100,
//       "scrap": 0,
//       "relatedDepartment": "과련부처 : 통겨청",
//       "institution": "시행기관 : 한국산업인력공단"
//     }
//   ]
// }

function CertificateItem({
  location,
  title,
  institution,
  relatedDepartment,
  scrap,
  view = 0,
}: Certificate) {
  return (
    <S.CertificateListContainer location={location}>
      <S.CertificateInfo>
        <S.Image />
        <S.CertificateInfoText>
          <S.Title>{title}</S.Title>
          <S.Bottom>
            <S.Path>
              {'관련부처 : '}
              {relatedDepartment}
            </S.Path>
            <S.Path>
              {'시행기관 : '}
              {institution}
            </S.Path>
          </S.Bottom>
        </S.CertificateInfoText>
      </S.CertificateInfo>
      <S.CountWrapper>
        {location === 'main' ? (
          <>
            <S.Count>
              <S.BookmarkIcon />
              {scrap}
            </S.Count>
            <S.HorizontalIcon />
            <S.Count>
              <S.ViewIcon />
              {view}
            </S.Count>
          </>
        ) : null}
        <S.BookmarkBtn>
          <S.SolidBookmarkIcon />
        </S.BookmarkBtn>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
}

export default CertificateItem;
