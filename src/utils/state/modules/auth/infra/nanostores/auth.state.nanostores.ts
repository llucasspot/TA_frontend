import { AuthState } from '#/modules/auth/domain';
import { adapter } from '#/utils/di';

import { ForNanostoresStateValue } from '../../../../infra/nanostores/for-nanostores-state-value';

@adapter(AuthState)
export class AuthStateNanostores
  extends ForNanostoresStateValue<ReturnType<AuthState['get']>>
  implements AuthState
{
  constructor() {
    super({
      currentUser: null,
      isAuthenticated: false,
    });
  }
}
