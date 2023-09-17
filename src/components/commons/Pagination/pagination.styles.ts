import styled from '@emotion/styled';

import { ReactComponent as ArrowLeft } from './res/img/arrow_left.svg';
import { ReactComponent as ArrowRight } from './res/img/arrow_right.svg';

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

export const PrevPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  border-radius: 4px;
  margin-right: 24px;
  background-color: ${props => props.theme.palette.background.primary};
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const NextPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  border-radius: 4px;
  margin-left: 24px;
  background-color: ${props => props.theme.palette.background.primary};
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const PrevPageIcon = styled(ArrowLeft)<{ 'data-isdisabled': boolean }>`
  path {
    fill: ${props => (props['data-isdisabled'] ? '#fff' : '#121110')};
  }
`;

export const NextPageIcon = styled(ArrowRight)<{ 'data-isdisabled': boolean }>`
  path {
    fill: ${props => (props['data-isdisabled'] ? '#fff' : '#121110')};
  }
`;
