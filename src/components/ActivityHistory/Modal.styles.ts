import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 492px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background: #fff;
`;

export const Form = styled.form`
  width: 492px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  flex: 1 0 0;
  color: var(--title-black, #121110);
  font-family: SUIT;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
  text-align: left;
`;

export const TitleBox = styled.div`
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

export const ActivityWrapper = styled.div`
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

export const SelectBtn = styled.input<{ show: boolean }>`
  height: 48px;
  padding: 12px;
  color: ${props => (props.show ? '#FD6B36' : '#a0a09f')}!important;
  border: 1px solid ${props => (props.show ? '#FD6B36' : '#a0a09f')};
  background: #fff;
  text-align: start;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  border-radius: ${props => (props.show ? '4px 4px 0px 0px' : '4px')};
  &::before {
    content: '⌵';
    position: absolute;
    top: 10px;
    right: 12px;
    color: ${props => (props.show ? '#FD6B36' : '#717070')};
    font-size: 24px;
  }
`;

export const SelectInput = styled.input<{ show: boolean }>`
  width: 100%;
  height: 48px;
  padding: 12px;
  color: ${props => (props.show ? '#FD6B36' : '#121110')}!important;
  border: 1px solid ${props => (props.show ? '#FD6B36' : '#a0a09f')};
  background: #fff;
  text-align: start;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  border-radius: ${props => (props.show ? '4px 4px 0px 0px' : '4px')};
  caret-color: transparent;
  cursor: pointer;
  ::placeholder {
    color: ${props => (props.show ? '#FD6B36' : '#a0a09f')};
  }
  ::-webkit-input-placeholder {
    color: ${props => (props.show ? '#FD6B36' : '#a0a09f')};
  }
  :-ms-input-placeholder {
    color: ${props => (props.show ? '#FD6B36' : '#a0a09f')};
  }
  &::before {
    content: '⌵';
    position: absolute;
    top: 10px;
    right: 12px;
    color: ${props => (props.show ? '#FD6B36' : '#717070')};
    font-size: 24px;
  }
`;

export const SelectOptions = styled.ul<{ show: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  height: 240px;
  margin-bottom: ${props => (props.show ? '-240px' : '0')};
  max-height: ${props => (props.show ? 'none' : '0')};
  flex-direction: column;
  align-items: start;
  background: var(--black-white-wh, #fff);
  overflow: auto;
  z-index: 1;
  box-shadow: ${props =>
    props.show
      ? '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)'
      : 'none'};
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    height: 48px;
    background-color: var(--orange-500, #fd6b36);
  }
  ::-webkit-scrollbar-track {
    background-color: var(--orange-100, #ffe8df);
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const SelectOptions1 = styled.ul`
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
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    height: 48px;
    background-color: var(--orange-500, #fd6b36);
  }
  ::-webkit-scrollbar-track {
    background-color: var(--orange-100, #ffe8df);
  }
`;

export const Option = styled.li`
  width: 100%;
  height: 48px;
  min-height: 48px;
  padding: 12px;
  color: var(--black-200, #121110) !important;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    border: 1px solid var(--line-normal, #e1e2e4);
    background: var(--background-primary, #ededed);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  color: var(--black-500, #121110);
  background: var(--black-white-wh, #fff);
  border-radius: 4px;
  border: 1px solid var(--black-200, #a0a09f);
  font-family: SUIT;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  ::placeholder {
    color: var(--black-200, #a0a09f);
  }
  :focus {
    border: 1px solid var(--orange-500, #fd6b36);
    border-radius: 4px 4px 0px 0px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 141px;
  padding: 12px;
  color: var(--black-500, #121110);
  background: var(--black-white-wh, #fff);
  border-radius: 4px;
  border-width: 1px !important;
  border: 1px solid var(--black-200, #a0a09f);
  font-family: SUIT;
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
  resize: none;
  ::placeholder {
    color: var(--black-200, #a0a09f);
  }
  :focus {
    border: none;
    outline: 1px solid #fd6b36;
  }
`;

export const Submit = styled.button`
  display: flex;
  width: 100%;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  color: var(--black-200, #a0a09f);
  background: var(--background-primary, #ededed);
  font-size: 17px;
  font-weight: 500;
  line-height: 24px;
`;
