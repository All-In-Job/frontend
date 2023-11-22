import styled from '@emotion/styled';

export const Form = styled.form`
  width: 492px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  flex: 1 0 0;
  color: ${props => props.theme.palette.black500};
  font-family: SUIT;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
  text-align: left;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 31px;
    padding: 8px;
    cursor: pointer;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
`;

export const ContentWrap = styled.div`
  width: 100%;
  label {
    position: relative;
    svg {
      position: absolute;
      top: 0;
      right: 7px;
    }
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  line-height: normal;
  margin-bottom: 12px;
`;

export const SelectBox = styled.div<{ show: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.show
      ? '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)'
      : 'none'};
  label {
    position: relative;
    cursor: pointer;
    svg {
      position: absolute;
      top: 12px;
      right: 12px;
      transform: rotate(${props => (props.show ? '180deg' : '0deg')});
      path {
        fill: ${props =>
          props.show ? props.theme.palette.orange500 : props.theme.palette.black300};
      }
    }
  }
`;

export const SelectInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  color: ${props => props.theme.palette.black500};
  background: var(--black-white-wh, #fff);
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.black200};
  font-family: SUIT;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  ::placeholder {
    color: ${props => props.theme.palette.black200};
  }
  :focus {
    color: ${props => props.theme.palette.orange500};
    border: 1px solid ${props => props.theme.palette.orange500};
    /* border-radius: 4px 4px 0px 0px; */
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

export const Textarea = styled.textarea`
  width: 100%;
  height: 141px;
  padding: 12px;
  color: ${props => props.theme.palette.black500};
  background: var(--black-white-wh, #fff);
  border-radius: 4px;
  border-width: 1px !important;
  border: 1px solid ${props => props.theme.palette.black200};
  font-family: SUIT;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  resize: none;
  ::placeholder {
    color: ${props => props.theme.palette.black200};
  }
  :focus {
    border: none;
    outline: 1px solid ${props => props.theme.palette.orange500};
  }
`;

export const Submit = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  color: ${props => (props.isActive ? '#F6F6F6' : props.theme.palette.black200)};
  background-color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.background.primary};
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;
