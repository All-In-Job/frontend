import styled from '@emotion/styled';

export const Desc = styled.p<{ size?: string }>`
  font-size: ${({ size }) => size ?? 'inherit'};
  color: var(--black-500, #121110);
`;

export const LightDesc = styled(Desc)`
  font-size: ${({ size }) => size ?? 'inherit'};
  color: var(--black-300, #717070);
  white-space: nowrap;
`;

export const SolutionItemContainer = styled.div`
  display: flex;
  margin-right: 8px;
  padding: 12px;
  border-radius: 8px;
  background: var(--black-white-wh, #fff);
  font-size: 11px;
  font-family: SUIT;
  font-style: normal;
  font-weight: 700;
`;

export const SolutionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin-bottom: 4px;
  }

  > div {
    margin-bottom: 4px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
