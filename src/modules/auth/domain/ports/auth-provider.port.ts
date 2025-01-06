import { SignInBody, SignUpBody } from '../dtos';

export interface AuthUser {
  id: string;
  email: string;
}

export interface AuthResponse {
  userId: string;
  accessToken: string;
}

export abstract class AuthProviderPort {
  abstract getUserInfo(userId: string): Promise<AuthUser>;

  abstract signIn(body: SignInBody): Promise<AuthResponse>;

  abstract signUp(body: SignUpBody): Promise<AuthResponse>;

  abstract signOut(): Promise<void>;
}
