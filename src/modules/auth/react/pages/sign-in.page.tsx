import { Form, FormButton, Input } from '#/components/form';
import { SignInBody } from '#/modules/auth/domain';
import { SignInAction } from '#/modules/auth/use-cases';
import {
  ForgotYourPasswordFeatureFlip,
  SignUpFeatureFlip,
} from '#/modules/auth/use-cases/feature-flip';
import { useAction, useGetter } from '#/utils/action/react';
import { useI18n } from '#/utils/i18n/react';

export function SignInPage() {
  const { t } = useI18n();
  const signInAction = useAction(SignInAction);
  const forgotYourPasswordFeatureFlip = useGetter(
    ForgotYourPasswordFeatureFlip,
  );
  const signUpFeatureFlip = useGetter(SignUpFeatureFlip);

  const onSubmit = async (data: SignInBody) => {
    await signInAction.mutateAsync(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-green-500">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {t('auth.sign-in-page.title')}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {t('auth.sign-in-page.subtitle')}
        </p>

        <Form dto={SignInBody} onSubmit={onSubmit} className="space-y-4">
          <div>
            <Input
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              formKey="email"
              label="auth.sign-in-page.email.label"
              type="email"
              placeholder="auth.sign-in-page.email.placeholder"
            />
          </div>
          <div>
            <Input
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              formKey="password"
              label="auth.sign-in-page.password.label"
              type="password"
              placeholder="auth.sign-in-page.password.placeholder"
            />
          </div>
          <FormButton className="w-full">
            {t('auth.action.SignInAction.success.label')}
          </FormButton>
        </Form>

        {forgotYourPasswordFeatureFlip.data && (
          <div className="text-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              {t('auth.sign-in-page.forgot-your-password')}
            </a>
          </div>
        )}

        {signUpFeatureFlip.data && (
          <div className="text-center mt-6 text-gray-500">
            {t('auth.sign-in-page.sign-up-message')}
            <a href="#" className="text-blue-500 hover:underline">
              {t('auth.sign-in-page.sign-up-message-link')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
