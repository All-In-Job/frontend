import { atom, atomFamily } from 'recoil';

export const tabIdState = atom({
  key: 'tabId',
  default: 'competition',
});

export const idsState = atomFamily({
  key: 'idsState',
  default: '',
});

export const inputValuesState = atomFamily({
  key: 'currentValue',
  default: '',
});
