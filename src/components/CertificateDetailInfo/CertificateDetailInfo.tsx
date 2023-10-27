import * as S from './CertificateDetailInfo.types';

type Props = {
  image: string | undefined;
  title: string | undefined;
  enTitle: string | undefined;
  relateDepartment: string | undefined;
  institution: string | undefined;
};

export const CertificateDetailInfo = ({
  image,
  title,
  enTitle,
  relateDepartment,
  institution,
}: Props) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image src={image} />
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
          <p>{relateDepartment}</p>
        </S.Info>
        <S.Info>
          <h3>{'시행기관'}</h3>
          <p>{institution}</p>
        </S.Info>
      </S.InfoContainer>
    </S.Wrapper>
  );
};
