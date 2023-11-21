import { type Request } from "express";

export interface UserStructure {
  _id: string;
  name: string;
  username: string;
  password: string;
}

export type UserWithoutPassword = Omit<UserStructure, "password">;

export interface UserRepository {
  getUser: () => Promise<UserStructure>;
}

export type UserCredentialStructure = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { username: string; password: string }
>;
