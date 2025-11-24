// lib/api/apiClient.ts
import axios from "axios";
import { getCookie, setCookie } from "@/lib/cookieUtils";
import { STORAGE_KEYS } from "@/constants/storage";
import { AxiosClient } from "@/lib/api/AxiosClient";
import { GetAccessTokenUseCase } from "@/domain/auth/usecase/GetAccessTokenUseCase";
import { AuthRepositoryImpl } from "@/domain/auth/repositories/AuthRepositoryImpl";
import { apiWithoutTokenClient } from "@/lib/api/AxiosWithoutTokenApiClient";


export class AxiosApiClient extends AxiosClient {
  private getAccessTokenUseCase: GetAccessTokenUseCase

  constructor(getAccessTokenUseCase: GetAccessTokenUseCase) {
    super();
    this.getAccessTokenUseCase = getAccessTokenUseCase
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    this.client.interceptors.request.use((request) => {
      const token = getCookie(STORAGE_KEYS.ACCESS_TOKEN)?.toString();

      if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
      }

      return request;
    });

    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.data?.message === "Expired Token") {
          try {
            const refreshToken = getCookie(
              STORAGE_KEYS.REFRESH_TOKEN,
            )?.toString();
            if (!refreshToken) {
              throw new Error("No refresh token available");
            }
            //
            // 요청을 통해 새로운 access token 발급
            const newAccessToken = await getAccessTokenUseCase.execute(refreshToken);

            setCookie(STORAGE_KEYS.ACCESS_TOKEN, newAccessToken, 1);

            // 실패했던 요청 재시도
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return this.client.request(error.config);
          } catch (refreshError) {
            console.error("Failed to refresh token:", refreshError);
            const channel = new BroadcastChannel("auth");
            channel.postMessage("logout");
          }
        }
        return Promise.reject(error);
      },
    );
  }
}

export const apiClient = new AxiosApiClient(new GetAccessTokenUseCase(new AuthRepositoryImpl(apiWithoutTokenClient)));