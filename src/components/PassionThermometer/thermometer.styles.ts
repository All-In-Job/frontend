import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BarPieceAttr } from './types';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 997px;
  height: 90px;
`;

export const Indicator = styled.div``;

export const BarPieceList = styled.ul`
  position: absolute;
  left: 17px;
  top: 50%;
  transform: translateY(-52%);
  display: flex;
  height: 57px;
  width: 960px;
  clip-path: url(#myClip);
`;

export const InnerCandyWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 100%;
  height: 100%;
`;

export const CandyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const CandyShapeWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const Description = styled.p`
  color: #ffffff;
  z-index: 2;
`;

export const BarPiece = styled.li<BarPieceAttr>`
  ${({ color, width, isTail }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width};
    background: ${color} 0% 0% no-repeat padding-box;
    border-top-right-radius: ${isTail ? '200px' : '0px'};
    border-bottom-right-radius: ${isTail ? '200px' : '0px'};
    font: normal normal 900 14px/18px SUIT;
    letter-spacing: 0px;
    color: #ffffff;
  `}

  ${({ isTail }) =>
    isTail &&
    css`
      margin: auto 0;
      height: 29px;
    `}
`;
