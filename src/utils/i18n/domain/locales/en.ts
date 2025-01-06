import { enAuth } from '#/modules/auth/i18n';
import { enHome } from '#/modules/home/i18n';

import { Translations } from '../index';

export const en: Translations = {
  auth: enAuth,
  home: enHome,
} as const;
