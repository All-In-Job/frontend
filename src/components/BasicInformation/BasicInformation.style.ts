import styled from '@emotion/styled';

import theme from 'styles/theme';

const Container = styled.div`
  display: grid;
  gap: 12px;
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
const Button = styled.button<{ $isValid: boolean }>`
  background-color: ${props =>
    props.$isValid ? theme.palette.orange300 : theme.palette.background.primary};
  color: ${props => (props.$isValid ? theme.palette.orange500 : theme.palette.black200)};
  padding: 12px;
  width: 84px;
  border-radius: 4px;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: ${props => (props.$isValid ? 'pointer' : 'default')};
`;
const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #a0a09f;
  padding: 12px;
  width: 100%;
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
const Label = styled.label`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`;
const Required = styled.span`
  background-color: ${theme.palette.background.primary};
  color: ${theme.palette.black300};
  padding: 3px;
  border-radius: 4px;
`;

const Submit = styled.button<{ $isValid: boolean }>`
  background-color: ${props =>
    props.$isValid ? theme.palette.orange300 : theme.palette.background.primary};
  color: ${props => (props.$isValid ? theme.palette.orange500 : theme.palette.black200)};
  border-radius: 9999px;
  padding: 12px;
  font-size: 17px;
  margin-top: 15px;
  cursor: ${props => (props.$isValid ? 'pointer' : 'default')};
`;

const ErrorMessage = styled.p`
  color: red;
  height: 16px;
`;

export {
  Container,
  Row,
  FlexRow,
  InputHeading,
  Button,
  Input,
  CheckAllButton,
  Ul,
  Label,
  Required,
  Submit,
  ErrorMessage,
};
