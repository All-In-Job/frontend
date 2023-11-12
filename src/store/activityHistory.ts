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
