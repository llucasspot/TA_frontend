import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Validate,
  ValidateIf,
} from 'class-validator';

import { Dto } from '#/utils/core/domain';

import { Transform } from '#class-transformer';

export class SignUpBody extends Dto<SignUpBody> {
  @IsEmail({}, { message: 'auth.register.validation.email.IsEmail' })
  @IsNotEmpty({ message: 'auth.register.validation.email.IsNotEmpty' })
  @Transform(({ value }) => value?.trim().toLowerCase())
  email!: string;

  @IsString({ message: 'auth.register.validation.password.IsString' })
  @Length(8, undefined, { message: 'auth.register.validation.password.Length' })
  @IsNotEmpty({ message: 'auth.register.validation.password.IsNotEmpty' })
  password!: string;

  @ValidateIf((dto: SignUpBody) => dto.password !== undefined)
  @IsString({ message: 'auth.register.validation.confirmPassword.IsString' })
  @IsNotEmpty({
    message: 'auth.register.validation.confirmPassword.IsNotEmpty',
  })
  @Validate((dto: SignUpBody) => dto.confirmPassword === dto.password, {
    message: 'auth.register.validation.passwordsDoNotMatch',
  })
  confirmPassword!: string;
}
