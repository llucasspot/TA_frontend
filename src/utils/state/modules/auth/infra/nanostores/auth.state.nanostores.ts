import { AuthState, AuthUser } from '#/modules/auth/domain';
import { adapter } from '#/utils/di';

import { ForNanostoresStateValue } from '../../../../infra/nanostores/for-nanostores-state-value';

@adapter(AuthState)
export class AuthStateNanostores
  extends ForNanostoresStateValue<{
    currentUser: AuthUser | null;
  }>
  implements AuthState
{
  constructor() {
    super({
      currentUser: null,
    });
  }
}
