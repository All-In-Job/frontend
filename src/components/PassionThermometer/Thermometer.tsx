import { FC, useEffect, useRef, useState } from 'react';

import BarPiece from './BarPiece';
import InnerCandyShape from './InnerCandyShape';
import * as S from './thermometer.styles';
import { ThermometerPercentList } from './types';
import UnionCandyShape from './UnionCandyShape';

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
      <InnerCandyShape />
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

      <UnionCandyShape />
    </S.Container>
  );
};

export default PassionThermometer;
