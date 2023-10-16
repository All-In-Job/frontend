import styled from '@emotion/styled';

export const LanguageStudyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 21px;
  color: #414140;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

export const LanguageStudyWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 12px;
  background: var(--background-primary-50, #f8f8f8);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  span {
    height: 32px;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid var(--orange-500, #fd6b36);
    color: var(--orange-500, #fd6b36);
    background: var(--black-white-wh, #fff);
    font-size: 15px;
    line-height: 24px;
  }
`;

export const ExamDate = styled.div``;
export const Deadline = styled.div``;
export const Schedule = styled.div``;

export const Title = styled.div`
  color: #121110;
  font-feature-settings: 'ss10' on;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #f6f6f6;
  background-color: #fd6b36;
`;
