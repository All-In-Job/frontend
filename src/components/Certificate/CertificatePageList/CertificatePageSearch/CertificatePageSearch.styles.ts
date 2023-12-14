import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 1200px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Heading = styled.h2`
  color: ${props => props.theme.palette.black500};
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const InputBox = styled.div`
  position: relative;
  width: 320px;
  height: 100%;
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const SelectBox = styled.div<{ show: boolean }>`
  position: relative;
  width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  label {
    position: relative;
    cursor: pointer;
    input {
      cursor: pointer;
    }
    svg {
      position: absolute;
      top: 12px;
      right: 12px;
      transform: rotate(${props => (props.show ? '180deg' : '0deg')});
      path {
        fill: ${props =>
          props.show ? props.theme.palette.orange500 : props.theme.palette.black500};
      }
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  color: ${props => props.theme.palette.black500};
  background: var(--black-white-wh, #fff);
  border: 1px solid ${props => props.theme.palette.orange500};
  font-family: SUIT;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  /* cursor: pointer; */
  ::placeholder {
    color: ${props => props.theme.palette.black500};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  display: flex;
  width: 100%;
  max-height: 240px;
  flex-direction: column;
  align-items: start;
  background: var(--black-white-wh, #fff);
  overflow: auto;
  z-index: 1;
  box-shadow:
    0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    height: 48px;
    background-color: ${props => props.theme.palette.orange500};
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.palette.orange100};
  }
`;

export const Option = styled.li`
  width: 100%;
  height: 48px;
  min-height: 48px;
  padding: 12px;
  color: ${props => props.theme.palette.black500} !important;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    border: 1px solid ${props => props.theme.palette.line.normal};
    background: ${props => props.theme.palette.background.primary};
  }
`;
