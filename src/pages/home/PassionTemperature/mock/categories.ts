import { TemperatureCategoryList } from 'pages/home/PassionTemperature/type';

export const categoryList: TemperatureCategoryList = {
  CERTIFICATE: {
    id: 'CERTIFICATE',
    name: '공모전',
    subCategoryList: ['2023 Meta Spark AR 콘텐츠 공모전'],
  },
  OUT_SIDE_ACTIVITY: {
    id: 'OUT_SIDE_ACTIVITY',
    name: '대외활동',
    subCategoryList: ['자격증명'],
  },
  COMPETITION: {
    id: 'COMPETITION',
    name: '자격증',
    subCategoryList: ['국가기술자격증'],
  },

  LANGUAGE_STUDY: {
    id: 'LANGUAGE_STUDY',
    name: '어학',
    subCategoryList: ['TOEIC 940점'],
  },
  INTERN: {
    id: 'INTERN',
    name: '인턴',
    subCategoryList: ['한국도로공사/디자인팀'],
  },
};
