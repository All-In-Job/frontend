import axios from 'axios';

// production mode
const prodUrl = {
  competition: import.meta.env.VITE_API_COMPETITION_BASE_URL,
  intern: import.meta.env.VITE_API_COMPETITION_BASE_URL,
  communityApi: import.meta.env.VITE_API_COMMUNITY_BASE_URL,
  crawlingApi: import.meta.env.VITE_API_CRAWLING, // /crawling
};
// development mode
const devUrl = {
  competition: '/mocks/compeition.json',
  intern: '/mocks/intern.json',
  communityApi: '/mocks/community.json',
  crawlingApi: '/mocks/findeCrawling.json',
  mainCrawlingApi: '/mocks/crawling.json',
};

// production mode 인지 development mode 인지 체크하여 어떤 url 객체를 사용할지 결정
// export const baseURL = import.meta.env.DEV ? devUrl : prodUrl;
export const baseURL = import.meta.env.DEV ? prodUrl : devUrl;

function createAxiosInstance(url: string) {
  return axios.create({ baseURL: url });
}

export const competitionApi = createAxiosInstance(baseURL.competition);
export const internApi = createAxiosInstance(baseURL.intern);

export const communityApi = createAxiosInstance(baseURL.communityApi);
export const crawlingApi = createAxiosInstance(baseURL.crawlingApi);
