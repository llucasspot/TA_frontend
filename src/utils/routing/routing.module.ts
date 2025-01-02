import { Module } from '#/utils/di';

import { RoutingServiceTanstackAdapter } from './infra';

@Module({
  providers: [RoutingServiceTanstackAdapter],
})
export class RoutingModule {}
