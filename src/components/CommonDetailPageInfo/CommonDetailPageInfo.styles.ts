import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-top: 24px;
`;

export const Img = styled.img`
  width: 306px;
  height: 388px;
  object-fit: cover;
  border-radius: 12px;
  /* background: var(--background-primary, #ededed); */
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  align-self: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0 56px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 24px 24px;
`;

export const Tbody = styled.tbody`
  color: var(--black-500, #121110);
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  th {
    color: var(--black-300, #717070);
  }
  td.tag {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    span {
      display: flex;
      padding: 0px 8px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid var(--orange-500, #fd6b36);
      color: var(--orange-500, #fd6b36);
      font-size: 16px;
      font-weight: 700;
      line-height: 26px;
    }
  }
`;

export const HorizontalRule = styled.tbody`
  width: 100%;
  margin: 8px 24px;
  border-top: 1px solid #e1e2e4;
`;
