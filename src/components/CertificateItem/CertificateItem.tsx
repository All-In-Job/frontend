import { Certificate } from 'types/certificate.type';

import * as S from './CertificateItem.styles';

interface CertificateItemProps extends Certificate {
  location: 'page' | 'main';
}

function CertificateItem({
  location,
  title,
  institution,
  relatedDepartment,
  scrap,
  view = 0,
}: CertificateItemProps) {
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
