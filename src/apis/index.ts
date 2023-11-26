import axios from 'axios';

function createAxiosInstance(url: string) {
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${url}`,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
}

export const userApi = createAxiosInstance('user');
export const loginApi = createAxiosInstance('login');

export const communityApi = createAxiosInstance('community');
export const crawlingApi = createAxiosInstance('crawling/finde');
export const detailCrawlingApi = createAxiosInstance('crawling/findeDetail');
export const detailCommunityApi = createAxiosInstance('community');
export const postCommunityApi = createAxiosInstance('community/create');
