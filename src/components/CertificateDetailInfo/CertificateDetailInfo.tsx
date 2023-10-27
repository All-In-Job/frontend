import * as S from './CertificateDetailInfo.types';

type Props = {
  image: string | undefined;
};

export const CertificateDetailInfo = ({ image }: Props) => {
  return (
    <div>
      <div>
        <S.Image src={image} alt='certificate-info-image' />
      </div>
      <div></div>
    </div>
  );
};
