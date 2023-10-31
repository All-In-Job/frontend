import { CertificateItemProps } from 'types/certificate.type';

import * as S from './CertificateItem.styles';

type Props = Omit<CertificateItemProps, 'enTitle'>;

const CertificateItem = ({
  location,
  title,
  institution,
  relateDepartment,
  scrap,
  view = 0,
  mainImage,
}: Props) => {
  return (
    <S.CertificateListContainer location={location}>
      <S.CertificateInfo>
        <S.Image src={mainImage}></S.Image>
        <S.CertificateInfoText>
          <S.Title>{title}</S.Title>
          <S.Bottom>
            <S.Path>
              {'관련부처 : '}
              {relateDepartment}
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
};

export default CertificateItem;
