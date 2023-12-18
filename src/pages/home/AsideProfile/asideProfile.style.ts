import styled from '@emotion/styled';

export const Img = styled.img<{ width: string; height: string }>`
  margin-right: 8px;
  border-radius: 4px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
export const Desc = styled.div<{ size?: string }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: ${({ size }) => size ?? 'inherit'};
  color: ${({ theme }) => theme.palette.black500};
`;

export const LightDesc = styled(Desc)`
  font-size: ${({ size }) => size ?? 'inherit'};
  color: ${({ theme }) => theme.palette.black300};
  white-space: nowrap;
`;

export const SolutionItemContainer = styled.div`
  width: 252px;
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
  width: 110px;
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
