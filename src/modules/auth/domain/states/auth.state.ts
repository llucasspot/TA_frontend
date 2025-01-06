import { AuthUser } from '#/modules/auth/domain';
import { StateValue } from '#/utils/state/domain';

export abstract class AuthState extends StateValue<
  | {
      currentUser: AuthUser;
      isAuthenticated: true;
    }
  | {
      currentUser: null;
      isAuthenticated: false;
    }
> {}
