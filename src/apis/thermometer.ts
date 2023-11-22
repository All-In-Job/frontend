import { userApi } from './index';

type pathInfo = {
  category: string;
  activeTitle: string;
  activeContent: string;
};

type formData = {
  path: string;
  createThermometer: pathInfo;
};

type deleteData = {
  path: string;
  thermometerId: string;
};

export const createActivityHistory = async (
  postData: formData,
  headers: { 'content-type': string; Authorization?: string | null },
) => {
  return userApi({
    method: 'POST',
    url: 'updateThermometer',
    data: postData,
    headers,
  });
};

export const deleteActivityHistory = async (
  postData: deleteData,
  headers: { 'content-type': string; Authorization?: string | null },
) => {
  return userApi({
    method: 'POST',
    url: 'updateThermometer',
    data: postData,
    headers,
  });
};
