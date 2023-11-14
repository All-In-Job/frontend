import { MyInfoFormState } from 'components/Modals/MyInfoUpdateModal/MyInfoUpdateModal';

import { userApi } from './index';

export const updateProfile = async (payload: MyInfoFormState) => {
  return await userApi({
    method: 'POST',
    url: 'updateProfile',
    data: payload,
  });
};
