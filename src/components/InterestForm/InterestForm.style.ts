import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as CheckCircle } from './res/img/check_circle.svg';
import { ReactComponent as ExpandMore } from './res/img/expand_more.svg';

type ExpandMoreIconProps = {
  choicedepartment: string;
  'data-isvisible': boolean;
  'data-isinputfocused': boolean;
};

type MajorDepartmentProps = {
  choicedepartment: string;
  isVisible: boolean;
  isInputFocused: boolean;
};

type ChangeColorProps = {
  isChangeColor: boolean | undefined;
};

export const ExpandMoreIcon = styled(ExpandMore)<ExpandMoreIconProps>`
  position: absolute;
  top: 12px;
  right: 12px;
  transform: rotate(${props => (props['data-isvisible'] ? '180deg' : '0deg')});

  path {
    fill: ${props =>
      props.choicedepartment !== '' || props['data-isinputfocused']
        ? props.theme.palette.orange500
        : props.theme.palette.black300};
  }
`;

export const CheckCircleIcon = styled(CheckCircle)<{ 'data-isactive': boolean }>`
  path {
    fill: ${props =>
      props['data-isactive'] ? props.theme.palette.orange500 : props.theme.palette.black200};
  }
`;

export const InterestFieldSetupWrapper = styled.div`
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  color: black;
  border: 1px solid #000;

  grid-column-start: 4;
  grid-column-end: 10;
`;

export const InterestFieldSetupTitle = styled.h1`
  color: #121110;
  font-size: 20px;
  font-family: Bold;
`;

export const MajorDepartment = styled.div<MajorDepartmentProps>`
  position: relative;
  border: 1px solid
    ${props =>
      props.choicedepartment !== '' || props.isInputFocused
        ? props.theme.palette.orange500
        : props.theme.palette.black200};
  background-color: #fff;
  border-radius: ${props => (props.isVisible ? '4px 4px 0 0' : '4px')};
  margin-top: 8px;

  ${props =>
    props.isVisible &&
    css`
      box-shadow:
        0px 9px 28px 8px rgba(0, 0, 0, 0.05),
        0px 6px 16px 0px rgba(0, 0, 0, 0.08),
        0px 3px 6px -4px rgba(0, 0, 0, 0.12);
    `}

  input {
    width: calc(100% - 24px);
    background-color: transparent;
    padding: 12px;
    color: ${props => props.theme.palette.orange500};
    font-size: ${props => props.theme.textStyle.title02.fontSize};
    line-height: ${props => props.theme.textStyle.title02.lineHeight};

    ::placeholder {
      color: ${props => props.theme.palette.black200};
    }
  }
`;

export const MajorDepartmentList = styled.ul`
  z-index: 999;
  position: absolute;
  top: 49px;
  left: -1px;
  width: calc(100% + 2px);
  height: 240px;
  border: 1px solid ${props => props.theme.palette.line.normal};
  background-color: #fff;
  overflow: scroll;
  box-shadow:
    0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12);

  li {
    color: ${props => props.theme.palette.black500};
    padding: 12px;
    font-size: ${props => props.theme.textStyle.title02.fontSize};
    line-height: ${props => props.theme.textStyle.title02.lineHeight};
    font-family: Medium;
    cursor: pointer;

    :hover {
      background-color: ${props => props.theme.palette.background.primary};
    }
  }
`;

export const DefaultImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 282px;
  margin: 24px 0;

  > img {
  }
`;

export const InterestSelectTagList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const ClickedTag = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: ${props => props.theme.textStyle.body01.fontSize};
  line-height: ${props => props.theme.textStyle.body01.lineHeight};
  font-family: Medium;
  cursor: pointer;
`;

export const InterestKeyWord = styled.div`
  padding: 24px 0;
`;

export const KeyWordText = styled.p`
  padding: 8px 0 12px;
  color: #aeaaa6;
  font-size: 14px;
`;

export const CheckBox = styled.div<ChangeColorProps>`
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isChangeColor ? '#fd6b36' : '#e7e6e5')};
  border-radius: 50%;
  margin-bottom: 6px;
`;

export const KeyWordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 12px;
`;

export const ClickedKeyWord = styled.li<ChangeColorProps>`
  display: flex;
  align-items: center;
  border: 2px solid
    ${props =>
      props.isChangeColor ? props.theme.palette.orange500 : props.theme.palette.background.primary};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  p {
    color: ${props =>
      props.isChangeColor ? props.theme.palette.orange500 : props.theme.palette.black200};
    font-weight: bold;
  }
`;
