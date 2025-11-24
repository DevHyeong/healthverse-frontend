import { AuthRepository } from "@/domain/auth/repositories/AuthRepository";
import { ApiClient } from "@/lib/api/ApiClient";

export class AuthRepositoryImpl implements AuthRepository{
  constructor(private readonly apiClient: ApiClient) {}

  async findAccessTokenByRefreshToken(refreshToken: string): Promise<string> {
    const response = await this.apiClient.get(`/api/v1/auth/refresh?refreshToken=${refreshToken}`);
    return response.data.data;
  }
}