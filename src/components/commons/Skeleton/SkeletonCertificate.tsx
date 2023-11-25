import styled from '@emotion/styled';

const SkeletonCertificate = () => {
  return (
    <CertificateContainer>
      <LoadingInfo>
        <Image />
        <TextContainer>
          <TitleSection />
          <SubSection />
        </TextContainer>
      </LoadingInfo>

      <LoadingCountContainer>
        <CountList>
          <li>
            <Icon />
            <Count />
          </li>
          <li>
            <DvideLine />
          </li>
          <li>
            <Icon />
            <Count />
          </li>
        </CountList>

        <Scrap />
      </LoadingCountContainer>
    </CertificateContainer>
  );
};

export default SkeletonCertificate;

const CertificateContainer = styled.article`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.palette.line.normal};
  padding: 24px 32px;

  :last-of-type {
    border-bottom: 1px solid ${props => props.theme.palette.line.normal};
  }
`;

const LoadingInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  width: 68px;
  height: 68px;
  margin-right: 16px;
  background-color: #eee;
`;

const TextContainer = styled.div``;

const TitleSection = styled.div`
  width: 200px;
  height: 26px;
  margin-bottom: 4px;
  background-color: #eee;
`;

const SubSection = styled.div`
  width: 350px;
  height: 26px;
  background-color: #eee;
`;

const LoadingCountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountList = styled.ul`
  height: 20px;
  display: flex;

  > li {
    display: flex;
    align-items: center;

    :nth-last-of-type(2) {
      display: flex;
      justify-content: center;
      width: 20px;
    }
  }
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  margin-right: 2px;
  background-color: #eee;
`;

const Count = styled.div`
  width: 30px;
  height: 14px;
  background-color: #eee;
`;

const DvideLine = styled.div`
  content: '';
  width: 1px;
  height: 12px;
  background-color: ${props => props.theme.palette.background.primary};
  border-radius: 1px;
`;

const Scrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-left: 24px;
  background-color: #eee;
`;
