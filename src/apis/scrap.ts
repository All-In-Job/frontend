import { userApi } from 'apis';

type formData = {
  path: string | undefined;
  scrapId: string | undefined;
};

export const scrapping = async (postData: formData) => {
  return userApi({
    method: 'POST',
    url: 'scrapping',
    data: postData,
  });
};
