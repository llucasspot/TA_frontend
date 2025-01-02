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
    const photographer = await this.usersDao.getById(userId);

    if (!photographer) {
      throw new Error('Invalid credentials');
    }

    return photographer;
  }

  async signIn({ email, password }: SignInBody): Promise<AuthResponse> {
    const photographer = await this.usersDao.get(
      this.buildPhotographerFinderByEmail(email, password),
    );

    if (!photographer) {
      return this.signUp({ email, password, confirmPassword: password });
    }

    return {
      accessToken: `mock_token_${photographer.id}`,
      userId: photographer.id,
    };
  }

  async signUp({ email, password }: SignUpBody): Promise<AuthResponse> {
    const photographer = await this.usersDao.get(
      this.buildPhotographerFinderByEmail(email),
    );
    if (photographer) {
      throw new Error('User already exis');
    }

    const newPhotographer: AuthUser = await this.usersDao.save({
      email,
      password,
    });

    return {
      accessToken: `mock_token_${newPhotographer.id}`,
      userId: newPhotographer.id,
    };
  }

  async logout(): Promise<void> {}

  private buildPhotographerFinderByEmail(
    photographerEmail?: string,
    password?: string,
  ) {
    const finder = new Finder('users');
    if (photographerEmail) {
      finder.filtersWith(['email', '$equals', photographerEmail]);
    }
    if (password) {
      finder.filtersWith(['password', '$equals', password]);
    }
    return finder;
  }
}
