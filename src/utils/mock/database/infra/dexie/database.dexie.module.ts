import { Module } from '#/utils/di';

import { DatabaseServiceDexieAdapter } from './service';

@Module({
  providers: [DatabaseServiceDexieAdapter],
})
export class DatabaseDexieModule {}
