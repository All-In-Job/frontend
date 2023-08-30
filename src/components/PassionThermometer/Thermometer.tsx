import { FC, useEffect, useRef, useState } from 'react';

import BarPiece from './BarPiece';
import { ReactComponent as CandyShape } from './res/img/fullCandy.svg';
import { ReactComponent as InnerShape } from './res/img/innerCandy.svg';
import * as S from './thermometer.styles';
import { ThermometerPercentList } from './types';

interface Props {
  thermometerPercentList: ThermometerPercentList;
}

//너비 800~997px 정도가 적당
const PassionThermometer: FC<Props> = ({ thermometerPercentList }) => {
  const indicatorRef = useRef<HTMLUListElement>(null);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    if (indicatorRef.current == null) return;
    setIndicatorWidth(indicatorRef.current?.clientWidth);
  }, []);

  return (
    <S.Container>
      <InnerShape />
      <S.BarPieceList ref={indicatorRef}>
        {Object.keys(thermometerPercentList).map((key, idx) => {
          const props = thermometerPercentList[key as keyof ThermometerPercentList];
          return (
            <BarPiece
              key={props.barType}
              isTail={Object.keys(thermometerPercentList).length - 1 === idx}
              indicatorWidth={indicatorWidth}
              {...props}
            />
          );
        })}
      </S.BarPieceList>

      <CandyShape />
    </S.Container>
  );
};

export default PassionThermometer;
