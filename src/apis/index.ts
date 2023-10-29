import axios from 'axios';

function createAxiosInstance(url: string) {
  return axios.create({ baseURL: 'https://allinjob.co.kr/' + url });
}

export const signupApi = createAxiosInstance('user');

// export const competitionApi = createAxiosInstance('competition');
// export const internApi = createAxiosInstance(baseURLs.intern);
export const communityApi = createAxiosInstance('community');
export const crawlingApi = createAxiosInstance('crawling/finde');
export const detailCrawlingApi = createAxiosInstance('crawling/findeDetail');
