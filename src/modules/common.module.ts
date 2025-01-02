import { CacheModule } from '#/utils/cache';
import { Module } from '#/utils/di';
import { I18nModule } from '#/utils/i18n';
import { RoutingModule } from '#/utils/routing';
import { ToastModule } from '#/utils/toast';

@Module({
  imports: [RoutingModule, I18nModule, ToastModule, CacheModule],
  providers: [],
})
export class CommonModule {}
