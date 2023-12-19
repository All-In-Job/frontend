import styled from '@emotion/styled';

import ScrapSection from './components/ScrapSection';

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
    </>
  );
};

export default ScrapPage;

const LeftBody = styled.main`
  grid-column: span 12;
  flex-direction: column;
  width: 100%;
  padding-bottom: 120px;
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
