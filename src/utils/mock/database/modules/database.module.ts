import { Module } from '#/utils/di';

import { AuthDatabaseModule } from './auth/auth.database.module';

@Module({
  imports: [AuthDatabaseModule],
})
export class DatabaseModule {}
