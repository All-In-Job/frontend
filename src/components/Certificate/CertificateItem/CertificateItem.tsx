import { useState } from 'react';

import { CertificateItemProps } from 'types/certificate.type';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';

import * as S from './CertificateItem.styles';

type Props = Omit<CertificateItemProps, 'enTitle'>;

const CertificateItem = ({
  location,
  title,
  institution,
  relatedDepartment,
  scrap,
  view = 0,
  mainImage,
  id,
  isScrap,
  path,
}: Props) => {
  const [scrapCount, setScrapCount] = useState(Number(scrap));

  return (
    <S.CertificateListContainer location={location}>
      <S.CertificateInfo to={path}>
        <S.Image src={mainImage}></S.Image>
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
              {scrapCount}
            </S.Count>
            <S.HorizontalIcon />
            <S.Count>
              <S.ViewIcon />
              {view}
            </S.Count>
          </>
        ) : null}
        <S.Scrap>
          <ScrapButton id={id} isScrap={isScrap} fill={'secondary'} setScrapCount={setScrapCount} />
        </S.Scrap>
      </S.CountWrapper>
    </S.CertificateListContainer>
  );
};

export default CertificateItem;
