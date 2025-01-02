import { Module } from '#/utils/di';

import { DatabaseModule } from '../../database/modules/database.module';

import { AuthApiMockModule } from './auth/auth.api.mock.module';

@Module({
  imports: [DatabaseModule, AuthApiMockModule],
})
export class ApiMockModule {}
