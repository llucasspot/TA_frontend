import { Module } from '#/utils/di';

import { DatabaseDexieModule } from '../../../../infra/dexie/database.dexie.module';

import { UsersDaoDexieAdapter } from './adapters/users-dao.dexie-adapter';

@Module({
  imports: [DatabaseDexieModule],
  providers: [UsersDaoDexieAdapter],
})
export class UsersDexieModule {}
