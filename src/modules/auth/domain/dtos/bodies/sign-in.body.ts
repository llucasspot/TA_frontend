import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

import { Dto } from '#/utils/core/domain';
import { I18nInput } from '#/utils/i18n/domain';

import { Transform } from '#class-transformer';

export class SignInBody extends Dto<SignInBody> {
  static emailI18nKeys = new I18nInput('auth.sign-in-page.email');
  static passwordI18nKeys = new I18nInput('auth.sign-in-page.password');

  @IsEmail({}, { message: SignInBody.emailI18nKeys.validation.IsEmail })
  @IsNotEmpty({ message: SignInBody.emailI18nKeys.validation.IsNotEmpty })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email!: string;

  @IsString({ message: SignInBody.passwordI18nKeys.validation.IsString })
  @Length(8, undefined, {
    message: SignInBody.passwordI18nKeys.validation.Length,
  })
  @IsNotEmpty({ message: SignInBody.passwordI18nKeys.validation.IsNotEmpty })
  password!: string;
}
