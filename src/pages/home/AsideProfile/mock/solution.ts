import { BarPieceColor } from 'pages/home/PassionTemperature/Thermometer/types';

import { Solution } from '../type';

export const solutions: Record<keyof BarPieceColor, Solution> = {
  COMPETITION: {
    id: '공모전',
    name: '00공모전',
    host: '2023 상공회의소',
    date: '2023-12-23',
    category: '',
    region: '서울시',
    target: '청년',
    img: [{ url: '', name: '' }],
  },
  CERTIFICATE: {
    id: '자격증',
    name: '00자격증',
    host: '2023 상공회의소',
    date: '2023-12-23',
    category: '',
    region: '서울시',
    target: '청년',
    img: [{ url: '', name: '' }],
  },
  LANGUAGE_STUDY: {
    id: '어학',
    name: '00어학',
    host: '2023 상공회의소',
    date: '2023-12-23',
    category: '',
    region: '서울시',
    target: '청년',
    img: [{ url: '', name: '' }],
  },
  INTERN: {
    id: '인턴',
    name: '00인턴',
    host: '2023 상공회의소',
    date: '2023-12-23',
    category: '',
    region: '서울시',
    target: '청년',
    img: [{ url: '', name: '' }],
  },
  OUT_SIDE_ACTIVITY: {
    id: '대외활동',
    name: '00활동',
    host: '2023 상공회의소',
    date: '2023-12-01',
    category: '',
    region: '서울시',
    target: '청년',
    img: [{ url: '', name: '' }],
  },
};
