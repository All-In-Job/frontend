import { Certificate } from 'types/certificate.type';

import * as S from './CertificateDetailInfo.styles';
type Props = Omit<Certificate, 'id' | 'scrap' | 'view' | 'examSchedules' | 'isScrap' | 'path'>;

export const CertificateDetailInfo = ({
  mainImage,
  title,
  enTitle,
  relatedDepartment,
  institution,
}: Props) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={mainImage} />
      </S.ImageWrapper>

      <S.InfoContainer>
        <S.Info>
          <h3>{'자격증명'}</h3>
          <p>{title}</p>
        </S.Info>
        <S.Info>
          <h3>{'영문명'}</h3>
          <p>{enTitle}</p>
        </S.Info>
        <S.Info>
          <h3>{'관련부처'}</h3>
          <p>{relatedDepartment}</p>
        </S.Info>
        <S.Info>
          <h3>{'시행기관'}</h3>
          <p>{institution}</p>
        </S.Info>
      </S.InfoContainer>
    </S.Wrapper>
  );
};
