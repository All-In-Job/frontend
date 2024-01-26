// import { ThermometerPercentList } from 'pages/home/PassionTemperature/Thermometer/types';

export function getTotalWidth(
  containerWidth: number,
  indicatorWidth: number,
  temperatureSum?: number,
) {
  const totalPercent = temperatureSum!;
  const onePercentWidth = containerWidth / 5 / 16;
  return onePercentWidth * totalPercent - (indicatorWidth ?? 0);
}

// export function getTotalPercent(thermometerPercentList: ThermometerPercentList) {
//   const entries = Object.entries(thermometerPercentList);
//   const totalPercent = entries.reduce((acc, cur) => {
//     return acc + cur[1].percent;
//   }, 0);

//   return totalPercent;
// }
