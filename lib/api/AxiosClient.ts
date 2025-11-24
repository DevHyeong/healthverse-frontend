import { ApiClient, ApiResponse } from "@/lib/api/ApiClient";
import { AxiosInstance } from "axios";

export abstract class AxiosClient implements ApiClient{
  protected client: AxiosInstance;

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