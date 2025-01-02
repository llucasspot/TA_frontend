import {
  AuthProviderPort,
  AuthResponse,
  AuthUser,
  SignInBody,
  SignUpBody,
} from '#/modules/auth/domain';
import { adapter, inject } from '#/utils/di';
import { UsersDaoPort } from '#/utils/mock/database/modules/auth/domain/users-dao.port';

import { Finder } from '../../../../database/domain';
import { ForMockControllerService } from '../../../domain/for-mock-controller-service';

@adapter(AuthProviderPort)
export class AuthProviderMockAdapter
  extends ForMockControllerService
  implements AuthProviderPort
{
  constructor(
    @inject(UsersDaoPort)
    private readonly usersDao: UsersDaoPort,
  ) {
    super();
  }

  async getUserInfo(userId: string): Promise<AuthUser> {
    const user = await this.usersDao.getById(userId);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    return user;
  }

  async signIn({ email, password }: SignInBody): Promise<AuthResponse> {
    const user = await this.usersDao.get(
      this.buildUserFinderByEmail(email, password),
    );

    if (!user) {
      return this.signUp({ email, password, confirmPassword: password });
    }

    return {
      accessToken: `mock_token_${user.id}`,
      userId: user.id,
    };
  }

  async signUp({ email, password }: SignUpBody): Promise<AuthResponse> {
    const user = await this.usersDao.get(this.buildUserFinderByEmail(email));
    if (user) {
      throw new Error('User already exis');
    }

    const newUser: AuthUser = await this.usersDao.save({
      email,
      password,
    });

    return {
      accessToken: `mock_token_${newUser.id}`,
      userId: newUser.id,
    };
  }

  async logout(): Promise<void> {}

  private buildUserFinderByEmail(userEmail?: string, password?: string) {
    const finder = new Finder('users');
    if (userEmail) {
      finder.filtersWith(['email', '$equals', userEmail]);
    }
    if (password) {
      finder.filtersWith(['password', '$equals', password]);
    }
    return finder;
  }
}
