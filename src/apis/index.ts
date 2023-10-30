import axios from 'axios';

// production mode
const baseURLs = {
  competition: import.meta.env.VITE_API_COMPETITION_BASE_URL,
  intern: import.meta.env.VITE_API_COMPETITION_BASE_URL,
  communityApi: import.meta.env.VITE_API_COMMUNITY,
  detailCrawlingApi: import.meta.env.VITE_API_CRAWLING_DETAIL,
  crawlingApi: import.meta.env.VITE_API_CRAWLING, // /crawling
};

function createAxiosInstance(url: string) {
  return axios.create({ baseURL: url });
}

export const competitionApi = createAxiosInstance(baseURLs.competition);
export const internApi = createAxiosInstance(baseURLs.intern);
export const communityApi = createAxiosInstance(baseURLs.communityApi);
export const crawlingApi = createAxiosInstance(baseURLs.crawlingApi);
export const detailCrawlingApi = createAxiosInstance(baseURLs.detailCrawlingApi);
