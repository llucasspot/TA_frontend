import { useTranslation } from 'react-i18next';

import { useService } from '#/utils/di/react';

import { I18nServicePort } from '../../domain';

export const useI18n = () => {
  useService(I18nServicePort);
  const {
    t,
    i18n: { changeLanguage, language: currentLanguage },
  } = useTranslation();

  return {
    t: (key?: string) => {
      if (key) {
        return t(key);
      }
      return key;
    },
    changeLanguage,
    currentLanguage,
  };
};
