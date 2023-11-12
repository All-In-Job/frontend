import { MyInfoFormState } from 'components/Modals/MyInfoUpdateModal/MyInfoUpdateModal';

import { signupApi } from './index';

export const updateProfile = async (payload: MyInfoFormState) => {
  return await signupApi({
    method: 'POST',
    url: 'updateProfile',
    data: payload,
  });
};
