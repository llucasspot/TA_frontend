import { Module } from '#/utils/di';

import { AuthStateModule } from './modules/auth/auth.state.module';

@Module({
  imports: [AuthStateModule],
})
export class StateModule {}
