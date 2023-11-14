import { signupApi } from './index';

type pathInfo = {
  category: string;
  activeTitle: string;
  activeContent: string;
};

type formData = {
  path: string;
  createThermometer: pathInfo;
};

export const createActivityHistory = async (
  postData: formData,
  headers: { 'content-type': string; Authorization?: string | null },
) => {
  return signupApi({
    method: 'POST',
    url: 'updateThermometer',
    data: postData,
    headers,
  });
};
