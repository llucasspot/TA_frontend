import { RequirePick } from '#/utils/core/domain';
import {
  I18nAction,
  I18nInputI,
  I18NInputValidationI,
} from '#/utils/i18n/domain';

export type AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: string;
    subtitle: string;
    email: I18nInputI<
      RequirePick<I18NInputValidationI, 'IsEmail' | 'IsNotEmpty'>
    >;
    password: I18nInputI<
      RequirePick<I18NInputValidationI, 'IsString' | 'Length' | 'IsNotEmpty'>
    >;
    'forgot-your-password': string;
    'sign-up-message': string;
    'sign-up-message-link': string;
  };
  action: {
    SignInAction: I18nAction;
  };
};
