import styled from '@emotion/styled';

import AsideProfile from 'pages/home/AsideProfile';

import ScrapSection from './components/ScrapSection';

// https://allinjob.co.kr/user/getUserScrap?path=%22outside%22&count=4&page1

const ScrapPage = () => {
  return (
    <>
      <LeftBody>
        <Title>스크랩</Title>
        <HorizontalDivider />
        {['competition', 'outside', 'language', 'qnet', 'intern'].map((item, i) => (
          <ScrapSection key={item} title={item} index={i} />
        ))}
      </LeftBody>
      <RightAside>
        <AsideProfile />
      </RightAside>
    </>
  );
};

export default ScrapPage;

const LeftBody = styled.main`
  grid-column: 1 / 11;
  flex-direction: column;
  width: 100%;
`;

const RightAside = styled.aside`
  grid-column: 11 / 12;
  width: 288px;
  height: 100%;
`;

const Title = styled.h2`
  margin-top: 32px;
  color: var(--black-500, #121110);
  font-feature-settings: 'ss10' on;

  /* Headline 2/Bold */
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.134px;
`;

const HorizontalDivider = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
  height: 1px;
  background-color: var(--line-normal, #e1e2e4);
`;
