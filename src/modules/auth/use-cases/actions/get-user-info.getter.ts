import { AuthProviderPort, AuthState, AuthUser } from '#/modules/auth/domain';
import { Getter } from '#/utils/action/domain';
import { inject, singleton } from '#/utils/di';
import { StorageService } from '#/utils/storage/domain';

@singleton()
export class GetUserInfoGetter extends Getter<
  ['GetUserInfoGetter'],
  { currentUser: AuthUser | null; isAuthenticated: boolean },
  []
> {
  constructor(
    @inject(AuthProviderPort)
    private readonly authProvider: AuthProviderPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
    @inject(AuthState)
    private readonly authState: AuthState,
  ) {
    super(() => ['GetUserInfoGetter']);
  }

  async get() {
    try {
      const userId = this.storageService.get(StorageService.currentUserId);
      if (!userId) {
        throw new Error('not access token set');
      }
      const currentUser = await this.authProvider.getUserInfo(userId);
      const isAuthenticated = true;

      const authState = {
        currentUser,
        isAuthenticated,
      } as const;

      this.authState.set(authState);

      return authState;
    } catch (err: unknown) {
      console.log('GetUserInfoGetter : ', err);

      const authState = {
        currentUser: null,
        isAuthenticated: false,
      } as const;

      this.authState.set(authState);

      return authState;
    }
  }
}
