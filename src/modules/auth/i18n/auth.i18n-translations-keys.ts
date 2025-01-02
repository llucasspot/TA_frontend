import { I18nAction, I18nInput } from '#/utils/i18n/domain';

export type AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: string;
    subtitle: string;
    email: I18nInput;
    password: I18nInput;
    'forgot-your-password': string;
    'sign-up-message': string;
    'sign-up-message-link': string;
  };
  action: {
    SignInAction: I18nAction;
  };
};
