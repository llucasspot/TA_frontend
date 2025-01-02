import { AuthI18nTranslationsKeys } from '#/modules/auth/i18n';

export const enAuth: AuthI18nTranslationsKeys = {
  'sign-in-page': {
    title: 'Welcome to the Association',
    subtitle: 'Sign in to continue',
    email: {
      label: 'Email',
      placeholder: 'Email',
      validation: {
        IsEmail: 'Please enter a valid email address.',
        IsNotEmpty: 'The email field is required.',
      },
    },
    password: {
      label: 'Password',
      placeholder: 'Password',
      validation: {
        IsNotEmpty: 'The password field is required.',
        IsString: 'The password must be a string.',
        Length: 'The password must be at least 8 characters long.',
      },
    },
    'forgot-your-password': 'Forgot your password?',
    'sign-up-message': 'Not a member yet? ',
    'sign-up-message-link': 'Join us',
  },
  action: {
    SignInAction: {
      label: 'Sign In',
      success: 'Successfully signed in...',
      pending: 'Signing in...',
      error: 'Error signing in...',
    },
  },
} as const;
