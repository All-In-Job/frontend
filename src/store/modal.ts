import { atom } from 'recoil';

export const isModalVisibleState = atom({
  key: 'isModalVisible',
  default: {
    myInfoUpdate: false,
  },
});

export const isAcitiviyModalState = atom({
  key: 'isAcitiviyModalVisible',
  default: false,
});
