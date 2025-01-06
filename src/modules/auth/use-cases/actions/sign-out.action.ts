import { AuthProviderPort } from '#/modules/auth/domain';
import { Action } from '#/utils/action/domain';
import { CacheServicePort } from '#/utils/cache/domain';
import { inject, singleton } from '#/utils/di';
import { StorageService } from '#/utils/storage/domain';

@singleton()
export class SignOutAction extends Action<void, void> {
  constructor(
    @inject(AuthProviderPort)
    private readonly authProvider: AuthProviderPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
    @inject(CacheServicePort)
    private readonly cacheService: CacheServicePort,
  ) {
    super({
      success: 'auth.action.SignOutAction.success',
      pending: 'auth.action.SignOutAction.pending',
      error: 'auth.action.SignOutAction.error',
    });
  }

  async execute() {
    await this.authProvider.signOut();
    this.storageService.remove(StorageService.currentUserId);
    this.storageService.remove(StorageService.currentAccessToken);

    this.cacheService.revalidateTag(['GetUserInfoGetter']);
  }

  onSuccess(): void {}

  onError(error: Error): void {
    console.error('Failed to sign out:', error);
  }
}
