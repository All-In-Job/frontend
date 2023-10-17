import CertificateItem from 'components/CertificateItem/CertificateItem';

import { CertificateExamInfo } from './CertificateExamInfo/CertificateExamInfo';
import * as S from './CertificatePageList.styles';

export const CertificatePageList = () => {
  return (
    <S.Container>
      <S.CertificateInfo>
        <S.Title>자격증 정보</S.Title>
        <S.CertificateItemWrapper>
          <CertificateItem
            location='page'
            // key={el.id}
            // title={el.title}
            // institution={el.institution}
            // relatedDepartment={el.relatedDepartment}
            // scrap={el.scrap}
            // view={el.view}
          />
        </S.CertificateItemWrapper>
      </S.CertificateInfo>
      <CertificateExamInfo />
    </S.Container>
  );
};
