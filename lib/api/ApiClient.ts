export interface ApiClient {
  get<T>(url: string): Promise<ApiResponse<T>>;
  post<T>(url: string, data: any): Promise<ApiResponse<T>>;
  put<T>(url: string, data: any): Promise<ApiResponse<T>>;
  delete<T>(url: string): Promise<ApiResponse<T>>;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}