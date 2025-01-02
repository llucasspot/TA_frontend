import { PropsWithChildren, useEffect } from 'react';
import {
  DefaultValues,
  FormProvider as RHFFormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import { Dto } from '#/utils/core/domain';
import { Type } from '#/utils/di/domain';

import { classValidatorResolver } from './class-validator';

export type FormProps<TDto extends Dto<TDto>> = PropsWithChildren<{
  dto: Type<TDto>;
  onSubmit: SubmitHandler<TDto>;
  className?: string;
  defaultValues?: DefaultValues<TDto>;
}>;

export function Form<TDto extends Dto<TDto>>({
  dto,
  onSubmit,
  children,
  className = '',
  defaultValues,
}: FormProps<TDto>) {
  const methods = useForm<TDto>({
    // @ts-expect-error resolver: classValidatorResolver(dto),
    resolver: classValidatorResolver(dto),
    defaultValues,
  });

  const errors = methods.formState.errors;
  const values = methods.getValues();

  useEffect(() => {
    console.log('form errors : ', errors);
  }, [errors]);

  useEffect(() => {
    console.log('form values : ', values);
  }, [values]);

  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </RHFFormProvider>
  );
}
