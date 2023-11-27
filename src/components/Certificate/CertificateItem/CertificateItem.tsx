import { CertificateItemProps } from 'types/certificate.type';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';

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
  id,
  isScrap,
}: Props) => {
  return (
    <S.CertificateListContainer location={location}>
      <S.CertificateInfo to={id}>
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
        <S.Scrap>
          <ScrapButton id={id} isScrap={isScrap} fill={'secondary'} />
        </S.Scrap>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
};

export default CertificateItem;
