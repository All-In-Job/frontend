import styled from '@emotion/styled';

export const Desc = styled.p<{ size: string }>`
  font-size: ${({ size }) => size};
`;

export const LightDesc = styled(Desc)`
  font-size: ${({ size }) => size};
`;
