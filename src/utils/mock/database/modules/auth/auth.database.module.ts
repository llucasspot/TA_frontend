import { Module } from '#/utils/di';

import { UsersDexieModule } from './infra/dexie/users.dexie.module';

@Module({
  imports: [UsersDexieModule],
})
export class AuthDatabaseModule {}
