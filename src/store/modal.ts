import { atom } from 'recoil';

const generateOptions = (state: string) => ({ key: state, default: false });

export const isMyInfoUpdateModalVisible = atom(generateOptions('isMyInfoUpdateModalVisible'));

export const isActivityModalState = atom(generateOptions('isActivityModalState'));
