import type { TokenType } from "./prisma-api/token-type";

export declare interface IJwtDecode {
  sub: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
  type: TokenType;
}

export declare type ISessionResponse = Pick<IUser, "id" | "email" | "name">