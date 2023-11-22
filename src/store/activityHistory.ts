import { atom } from 'recoil';

export const activityListIdState = atom({
  key: 'activityListId',
  default: '',
});

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

export const periodState = atom({
  key: 'periodValue',
  default: '',
});
