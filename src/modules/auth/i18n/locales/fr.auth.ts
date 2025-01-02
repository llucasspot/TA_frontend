import { AuthI18nTranslationsKeys } from '#/modules/auth/i18n';

export const frAuth: AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: "Bienvenue dans l'association",
    subtitle: 'Connectez-vous pour continuer',
    email: {
      label: 'Email',
      placeholder: 'Email',
      validation: {
        IsEmail: 'Veuillez entrer une adresse email valide.',
        IsNotEmpty: 'Le champ email est obligatoire.',
      },
    },
    password: {
      label: 'Mot de passe',
      placeholder: 'Mot de passe',
      validation: {
        IsNotEmpty: 'Le champ mot de passe est obligatoire.',
        IsString: 'Le mot de passe doit être une chaîne de caractères.',
        Length: 'Le mot de passe doit contenir au moins 8 caractères.',
      },
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
