import { TemperatureCategoryList } from 'pages/home/PassionTemperature/type';

export const categoryMockList: TemperatureCategoryList = {
  userCompetition: {
    field: '공모전',
    activeTitle: [
      '2023 Meta Spark AR 콘텐츠 공모전',
      '2023 Meta Spark AR 콘텐츠 공모전',
      '2023 Meta Spark AR 콘텐츠 공모전',
    ],
  },
  userOutside: {
    field: '대외활동',
    activeTitle: ['자격증명'],
  },
  userQnet: {
    field: '자격증',
    activeTitle: ['국가기술자격증'],
  },

  userLanguage: {
    field: '어학',
    activeTitle: ['TOEIC 940점'],
  },
  userIntern: {
    field: '인턴',
    activeTitle: ['한국도로공사/디자인팀'],
  },
};
