export interface AuthRepository {
  findAccessTokenByRefreshToken(refreshToken: string): Promise<string>;
}