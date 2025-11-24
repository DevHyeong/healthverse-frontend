import { AuthRepository } from "@/domain/auth/repositories/AuthRepository";

export class GetAccessTokenUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(refreshToken: string): Promise<string> {
    return await this.repository.findAccessTokenByRefreshToken(refreshToken);
  }
}