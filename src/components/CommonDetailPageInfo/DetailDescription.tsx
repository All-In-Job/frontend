import styled from '@emotion/styled';

export const DetailDescription = () => {
  return (
    <Wrapper>
      <Title>상세내용</Title>
      <DetailDescriptionBox>
        <div>공고명 : 2023 Meta Spark AR 콘텐츠 공모전</div>
        <div>공모주제 : 사업화 아이디어</div>
        <div>제출 마감 : 2023.8.21 ~ 2023.9.14</div>
      </DetailDescriptionBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-column: span 12;
`;
const Title = styled.div`
  margin: 0 0 24px 0;
  color: var(--black-500, #121110);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

const DetailDescriptionBox = styled.div`
  display: flex;
  width: 100%;
  height: 749px;
  padding: 32px;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid var(--orange-200, #fec4af);
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
`;

// export const HorizontalRule = styled.div`
//   width: 100%;
//   margin: 8px 0;
//   border-top: 1px solid #d0cfcf;
// `;
