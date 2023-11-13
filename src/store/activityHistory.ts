import { atom } from 'recoil';

export const categoryIdState = atom({
  key: 'categoryId',
  default: '',
});

export const currentCategoryState = atom({
  key: 'currentCategory',
  default: '',
});

export const currentKeywordState = atom({
  key: 'currentKeyword',
  default: '',
});

export const titleValueState = atom({
  key: 'titleValue',
  default: '',
});

export const startDateState = atom({
  key: 'startDate',
  default: '',
});

export const endDateState = atom({
  key: 'endDate',
  default: '',
});
