import axios from 'axios';

import { BASE_URL } from './constants';
import { GetClientArgs } from './type';

export const getClient = ({ endpoint, isFake = false }: GetClientArgs) => {
  const fullEndpoint = '/' + endpoint;

  const baseURL = isFake //
    ? fullEndpoint
    : BASE_URL + fullEndpoint;

  return axios.create({ baseURL });
};
