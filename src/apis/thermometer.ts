import { formData } from 'components/ActivityHistory/Modal';

import { signupApi } from './index';

export const createActivityHistory = async (
  postData: formData,
  headers?: Record<string, string>,
) => {
  return await signupApi({
    method: 'POST',
    url: 'updateThermometer',
    data: postData,
    withCredentials: true,
    headers: {
      'content-type': 'application/json',
      ...headers, // 추가된 부분
    },
  });
};
