import { MyInfoFormState } from 'components/Modals/MyInfoUpdateModal/MyInfoUpdateModal';

import { userApi } from './index';

export const updateProfile = async (payload: MyInfoFormState) => {
  return await userApi({
    method: 'PATCH',
    url: 'updateProfile',
    data: payload,
  });
};

export const getUserActivity = async (currentPage: number) => {
  return await userApi({
    method: 'GET',
    url: `findPeriodThermometer?count=true&page=${currentPage}`,
  });
};
