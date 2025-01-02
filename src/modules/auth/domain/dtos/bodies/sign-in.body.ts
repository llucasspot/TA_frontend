import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

import { Dto } from '#/utils/core/domain';

import { Transform } from '#class-transformer';

export class SignInBody extends Dto<SignInBody> {
  @IsEmail({}, { message: 'auth.signIn.validation.email.IsEmail' })
  @IsNotEmpty({ message: 'auth.signIn.validation.email.IsNotEmpty' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email!: string;

  @IsString({ message: 'auth.login.validation.password.IsString' })
  @Length(8, undefined, { message: 'auth.login.validation.password.Length' })
  @IsNotEmpty({ message: 'auth.login.validation.password.IsNotEmpty' })
  password!: string;
}
