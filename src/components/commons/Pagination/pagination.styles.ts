import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const PaginationNumber01 = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.black100};
  background-color: transparent;
  font-size: 20px;
  font-family: ExtraBold;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  line-height: 20px;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const PaginationLayout01 = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NumberButton = styled.button<{ isActive: boolean }>`
  color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.black100};
  background-color: transparent;
  font-size: 20px;
  font-family: ExtraBold;
  text-decoration: ${props => (props.isActive ? 'underline' : 'none')};
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const PaginationLayout02 = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${props => props.theme.palette.black100};
    font-size: 20px;
    font-family: ExtraBold;
    line-height: 20px;

    :first-of-type {
      color: ${props => props.theme.palette.orange500};
    }

    :nth-last-of-type(2) {
      margin: 0 8px;
    }
  }
`;
