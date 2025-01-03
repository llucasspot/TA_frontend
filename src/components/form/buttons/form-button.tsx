import { useFormContext } from 'react-hook-form';

import { Button, ButtonProps } from '#/components/button';

type FormButton = Omit<ButtonProps, 'disabled'>;

export const FormButton = ({ ...props }: FormButton) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return <Button disabled={isSubmitting} {...props} />;
};
