import { useI18n } from '#/utils/i18n/react';

export function SignInPage() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-green-500">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {t('auth.sign-in-page.title')}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {t('auth.sign-in-page.subtitle')}
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t('auth.sign-in-page.email')}
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {t('auth.sign-in-page.password')}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Votre mot de passe"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('auth.sign-in-page.sign-in')}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            {t('auth.sign-in-page.forgot-your-password')}
          </a>
        </div>

        <div className="text-center mt-6 text-gray-500">
          {t('auth.sign-in-page.sign-up-message')}
          <a href="#" className="text-blue-500 hover:underline">
            {t('auth.sign-in-page.sign-up-message-link')}
          </a>
        </div>
      </div>
    </div>
  );
}
