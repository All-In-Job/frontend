import styled from '@emotion/styled';

import theme from 'styles/theme';

const Container = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 28px;
`;
const Row = styled.div`
  display: grid;
  gap: 8px;
`;
const FlexRow = styled.div`
  display: flex;
`;
const InputHeading = styled.h1`
  font-size: 20px;
  display: flex;
`;
const Button = styled.button`
  background-color: ${theme.palette.background.primary};
  color: ${theme.palette.black200};
  padding: 12px;
  width: 84px;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CheckAllButton = styled.button`
  border-radius: 4px;
  border: 1px solid #a0a09f;
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
const Ul = styled.ul`
  display: grid;
  gap: 16px;
  padding: 12px;
`;
const List = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Submit = styled.button`
  background-color: ${theme.palette.background.primary};
  border-radius: 9999px;
  padding: 12px;
  cursor: pointer;
  font-size: 17px;
  margin-top: 15px;
`;

export { Container, Row, FlexRow, InputHeading, Button, CheckAllButton, Ul, List, Submit };
