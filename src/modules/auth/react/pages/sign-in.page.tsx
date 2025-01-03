import { Button } from '#/components/button';
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary-500 to-primary-600">
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
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FED593]"
              id="email"
              formKey="email"
              type="email"
              i18nInput={SignInBody.emailI18nKeys}
            />
          </div>
          <div>
            <Input
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FED593]"
              id="password"
              formKey="password"
              type="password"
              i18nInput={SignInBody.passwordI18nKeys}
            />
          </div>
          <FormButton
            variant="flat"
            state="default"
            className="w-full"
            label="auth.action.SignInAction.label"
          />
        </Form>

        {forgotYourPasswordFeatureFlip.data && (
          <div className="text-center mt-4">
            <Button
              link={{
                to: '/',
              }}
              variant="inline"
              state="default"
              label="auth.sign-in-page.forgot-your-password"
            />
          </div>
        )}

        {signUpFeatureFlip.data && (
          <div className="text-center mt-6 text-gray-500">
            {t('auth.sign-in-page.sign-up-message')}
            <Button
              link={{
                to: '/',
              }}
              variant="inline"
              state="default"
              label="auth.sign-in-page.sign-up-message-link"
            />
          </div>
        )}
      </div>
    </div>
  );
}
