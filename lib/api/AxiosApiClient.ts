// lib/api/apiClient.ts
import axios, { AxiosInstance } from 'axios';
import { ApiClient, ApiResponse } from './ApiClient';

export class AxiosApiClient implements ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });

    this.client.interceptors.request.use((request) => {
      // const token = getCookie(COOKIE_ACCESS_TOKEN)?.toString();
      // if (token) {
      //     request.headers.setAuthorization(`Bearer ${token}`);
      // }
      return request;
    });


    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.data?.message === "Expired Token") {
          const channel = new BroadcastChannel("auth");
          channel.postMessage("logout");

          //deleteCookie(COOKIE_ACCESS_TOKEN);
          //deleteCookie(COOKIE_REFRESH_TOKEN);
        }
        return Promise.reject(error);
      },
    );
  }

  async get<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.client.get(url);
    return response;
  }

  async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response = await this.client.post(url, data);
    return response;
  }

  async put<T>(url: string, data: any): Promise<ApiResponse<T>> {
    const response = await this.client.put(url, data);
    return response;
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response = await this.client.delete(url);
    return response;
  }
}

export const apiClient = new AxiosApiClient();