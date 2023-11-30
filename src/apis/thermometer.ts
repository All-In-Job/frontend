import { AxiosResponse } from 'axios';
import { ActivityListData } from 'types/activityHistory';

import { userApi } from './index';

export type pathInfo = {
  field: string;
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

export type deleteData = {
  path: string;
  thermometerId: string;
};

export type patchInfo = {
  activeContent: string;
  period?: string;
  score?: string;
};

export type patchData = {
  path: string;
  thermometerId: string;
  patchThermometer: patchInfo;
};

type FuncType<T> = (path: T) => Promise<AxiosResponse<{ data: ActivityListData[] }>>;

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

export const patchThermometer = async (formData: patchData) => {
  return userApi({
    method: 'PATCH',
    url: 'patchThermometer',
    data: formData,
  });
};
