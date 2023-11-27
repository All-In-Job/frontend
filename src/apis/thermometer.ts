import { AxiosResponse } from 'axios';
import { ActivityList } from 'types/activityHistory';

import { userApi } from './index';

export type pathInfo = {
  category: string;
  activeTitle: string;
  activeContent: string;
  period?: string;
  score?: string;
};

export type postData = {
  path: string;
  createThermometer: pathInfo;
};

type deleteData = {
  path: string;
  thermometerId: string;
};

type FuncType<T> = (path: T) => Promise<AxiosResponse<{ data: ActivityList[] }>>;

export const createThermometerData = async (formData: postData) => {
  return userApi({
    method: 'POST',
    url: 'updateThermometer',
    data: formData,
  });
};

export const deleteThermometerData = async (formData: deleteData) => {
  return userApi({
    method: 'POST',
    url: 'updateThermometer',
    data: formData,
  });
};

export const findPathThermometer: FuncType<string> = async path => {
  return userApi({
    method: 'GET',
    url: 'findPathThermometer',
    params: { path: path },
  });
};
