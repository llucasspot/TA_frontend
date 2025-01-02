import { Module } from '#/utils/di';

import { AuthProviderMockAdapter } from './infra/auth-provider.mock-adapter';

@Module({
  providers: [AuthProviderMockAdapter],
})
export class AuthApiMockModule {}
