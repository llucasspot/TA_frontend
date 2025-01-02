import { Module } from '#/utils/di';
import { I18nModule } from '#/utils/i18n';

import { ToastServiceToastifyAdapter } from './infra';

@Module({
  imports: [I18nModule],
  providers: [ToastServiceToastifyAdapter],
})
export class ToastModule {}
