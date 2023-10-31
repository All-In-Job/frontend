import axios from 'axios';

function createAxiosInstance(url: string) {
  return axios.create({ baseURL: `${import.meta.env.VITE_API_BASE_URL}/${url}` });
}

export const signupApi = createAxiosInstance('user');
export const loginApi = createAxiosInstance('login');

export const communityApi = createAxiosInstance('community');
export const crawlingApi = createAxiosInstance('crawling/finde');
export const detailCrawlingApi = createAxiosInstance('crawling/findeDetail');
