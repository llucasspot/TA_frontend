import { Module } from '#/utils/di';
import { I18nServiceI18nextAdapter } from '#/utils/i18n/infra';

@Module({
  providers: [I18nServiceI18nextAdapter],
})
export class I18nModule {}
