import { AuthI18nTranslationsKeys } from '#/modules/auth/i18n';

export const frAuth: AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: "Bienvenue dans l'association",
    subtitle: 'Connectez-vous pour continuer',
    email: 'Email',
    password: 'Mot de passe',
    'sign-in': 'Se connecter',
    'forgot-your-password': 'Mot de passe oublié ?',
    'sign-up-message': 'Pas encore membre ? ',
    'sign-up-message-link': 'Rejoignez-nous',
  },
} as const;
