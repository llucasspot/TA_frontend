import { AuthI18nTranslationsKeys } from '#/modules/auth/i18n';

export const frAuth: AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: "Bienvenue dans l'association",
    subtitle: 'Connectez-vous pour continuer',
    email: {
      label: 'Email',
      placeholder: 'Email',
    },
    password: {
      label: 'Mot de passe',
      placeholder: 'Mot de passe',
    },
    'forgot-your-password': 'Mot de passe oublié ?',
    'sign-up-message': 'Pas encore membre ? ',
    'sign-up-message-link': 'Rejoignez-nous',
  },
  action: {
    SignInAction: {
      label: 'Se connecter',
      success: 'Bien connecté...',
      pending: 'Connexion...',
      error: 'Erreur lors de la connexion...',
    },
  },
} as const;
