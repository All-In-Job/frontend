import { FC, RefObject } from 'react';

import styled from '@emotion/styled';

import { BAR_PIECE_COLOR } from './constants';
import { ThermometerList } from './types';
import { getBarWidth } from './utils';

interface Props {
  temperatureWidth: number;
  temperatureRef: RefObject<HTMLElement>;
  thermometerList?: ThermometerList;
}

const PassionThermometer: FC<Props> = ({
  temperatureWidth: temperatureWidth,
  temperatureRef: temperatureRef,
  thermometerList,
}) => {
  let acc = 0;
  let prefAcc = 0;

  console.log('temperatureWidth : ', temperatureWidth);

  return (
    <Container ref={temperatureRef as RefObject<HTMLDivElement>}>
      <svg
        width='1155'
        height='34'
        viewBox='0 0 1155 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <mask id='barMask'>
            <path
              d='M31.4249 26C28.421 30.8043 23.0837 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C23.4966 0 29.1421 3.64423 32.0038 9H1146.5C1151.19 9 1155 12.8056 1155 17.5C1155 22.1944 1151.19 26 1146.5 26H31.4249Z'
              fill='white'
            />
          </mask>
        </defs>

        <path
          d='M31.4249 26C28.421 30.8043 23.0837 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C23.4966 0 29.1421 3.64423 32.0038 9H1146.5C1151.19 9 1155 12.8056 1155 17.5C1155 22.1944 1151.19 26 1146.5 26H31.4249Z'
          fill='#EDEDED'
        />
        <g mask='url(#barMask)'>
          {thermometerList &&
            Object.keys(thermometerList).map(key => {
              const { percent, barType } = thermometerList[key as keyof ThermometerList];
              const width = getBarWidth(percent, 1155);
              prefAcc = acc;
              acc += Number(width);

              return (
                <g key={`${acc}_${barType}`}>
                  <rect
                    x={prefAcc.toString()}
                    y='0'
                    width={width.toString()}
                    height='34'
                    fill={BAR_PIECE_COLOR[barType]}
                  />
                  {percent > 0 && (
                    <text
                      x={prefAcc + Number(width) / 2}
                      y='21'
                      fill='black'
                      fontSize='12px'
                      textAnchor='middle'
                    >
                      {percent}%
                    </text>
                  )}
                </g>
              );
            })}
        </g>
      </svg>
    </Container>
  );
};

export default PassionThermometer;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  background: var(--background-primary-50, #f8f8f8);
`;
