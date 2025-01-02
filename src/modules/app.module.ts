import { ApiModule } from '#/utils/api';
import { Module } from '#/utils/di';
import { StateModule } from '#/utils/state';
import { StorageModule } from '#/utils/storage';

import { CommonModule } from './common.module';

@Module({
  imports: [ApiModule, CommonModule, StateModule, StorageModule],
})
export class AppModule {}
