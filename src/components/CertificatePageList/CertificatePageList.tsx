import CertificateItem from 'components/CertificateItem/CertificateItem';

import * as S from './CertificatePageList.styles';

export const CertificatePageList = () => {
  return (
    <div>
      <div>
        <h3>자격증 정보</h3>
        <S.CertificateItemWrapper>
          <CertificateItem />
        </S.CertificateItemWrapper>
      </div>
      <div>
        <h3>시험정보 정보</h3>
        <div>Hello, world</div>
      </div>
    </div>
  );
};
