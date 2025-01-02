import { AuthProviderPort, AuthState, SignInBody } from '#/modules/auth/domain';
import { Action } from '#/utils/action/domain';
import { inject, singleton } from '#/utils/di';
import { RoutingServicePort } from '#/utils/routing/domain';
import { StorageService } from '#/utils/storage/domain';

@singleton()
export class SignInAction extends Action<void, SignInBody> {
  constructor(
    @inject(AuthProviderPort)
    private readonly authProvider: AuthProviderPort,
    @inject(StorageService)
    private readonly storageService: StorageService,
    @inject(RoutingServicePort)
    private readonly routingService: RoutingServicePort,
    @inject(AuthState)
    private readonly authState: AuthState,
  ) {
    super({
      success: 'auth.action.SignInAction.success',
      pending: 'auth.action.SignInAction.pending',
      error: 'auth.action.SignInAction.error',
    });
  }

  async execute(body: SignInBody) {
    const { accessToken, userId } = await this.authProvider.signIn(body);
    this.storageService.set(StorageService.currentUserId, userId);
    this.storageService.set(StorageService.currentAccessToken, accessToken);

    const user = await this.authProvider.getUserInfo(userId);
    this.authState.set({ currentUser: user });
  }

  onSuccess(): void {
    this.routingService.redirect('/home');
  }

  onError(error: Error): void {
    console.error('Failed to sign in:', error);
  }
}
