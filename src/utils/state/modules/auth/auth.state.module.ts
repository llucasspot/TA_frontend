import { Module } from '#/utils/di';

import { AuthStateNanostores } from './infra/nanostores/auth.state.nanostores';

@Module({
  providers: [AuthStateNanostores],
})
export class AuthStateModule {}
