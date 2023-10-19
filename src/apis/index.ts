import axios from 'axios';

// production mode
const prodUrl = {
  user: import.meta.env.VITE_API_COMMUNITY_BASE_URL, // '/user'
  login: import.meta.env.VITE_API_LOGIN_BASE_URL, // '/login'
  community: import.meta.env.VITE_API_COMMUNITY_BASE_URL, // '/community'
  crawling: import.meta.env.VITE_API_CRAWLING_BASE_URL, // '/crawling'
};
// development mode
const devUrl = {
  community: '/mocks/community.json',
  crawling: '/mocks/crawling.json',
};

export const baseURL = import.meta.env.DEV ? devUrl : prodUrl;

function createAxiosInstance(url: string) {
  return axios.create({ baseURL: url });
}

export const userApi = createAxiosInstance(prodUrl.user);
export const loginApi = createAxiosInstance(prodUrl.login);
export const communityApi = createAxiosInstance(baseURL.community);
export const crawlingApi = createAxiosInstance(baseURL.crawling);
