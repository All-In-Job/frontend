import { atom } from 'recoil';

export const isModalVisibleState = atom({
  key: 'isModalVisible',
  default: {
    myInfoUpdate: false,
  },
});
