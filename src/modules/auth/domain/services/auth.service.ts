import { AuthProviderPort, SignInBody } from '#/modules/auth/domain';
import { inject, singleton } from '#/utils/di';
import { StorageService } from '#/utils/storage/domain';

import { AuthState } from '../states';

@singleton()
export class AuthService {
  constructor(
    @inject(AuthProviderPort)
    private readonly authProvider: AuthProviderPort,
    @inject(AuthState)
    private readonly authState: AuthState,
    @inject(StorageService)
    private readonly storageService: StorageService,
  ) {}

  async signIn(body: SignInBody): Promise<void> {
    const { accessToken, userId } = await this.authProvider.signIn(body);
    const photographer = await this.authProvider.getUserInfo(userId);

    this.authState.set({ currentUser: photographer });
    this.storageService.set(StorageService.currentAccessToken, accessToken);
    this.storageService.set(StorageService.currentUserId, userId);
  }

  async logout() {
    await this.authProvider.logout();

    this.authState.set({ currentUser: null });
    this.storageService.remove(StorageService.currentAccessToken);
    this.storageService.remove(StorageService.currentUserId);
  }

  isAuthenticated(): boolean {
    return (
      this.storageService.get(StorageService.currentAccessToken) !== null &&
      this.storageService.get(StorageService.currentUserId) !== null
    );
  }
}
