import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface Result {
  code: string;
  msg: string;
}

export interface ResultData<T = any> extends Result {
  data: T;
}

export class VAxios {
  private readonly axiosInstance: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options);
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance;
  }

  get<T>(url: string, config: AxiosRequestConfig = {}): Promise<ResultData<T>> {
    // return this.axiosInstance.get(url, { params, ..._object });
    return this.axiosInstance.get(url, config);
  }

  post<T>(url: string, data?: object, config: AxiosRequestConfig = {}): Promise<ResultData<T>> {
    console.log(`post`);
    return this.axiosInstance.post(url, data, config);
  }
}
