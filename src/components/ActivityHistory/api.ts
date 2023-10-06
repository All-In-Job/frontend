// import axios from 'axios';

export interface IGetActivityData {
  data: IActivityData[];
}

export interface IActivityData {
  id: string;
  title: string;
  enterprise: string;
  Dday: string;
  mainImage: string;
  applicationPeriod: string;
}
