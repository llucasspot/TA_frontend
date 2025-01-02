import { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { I18nInput } from '#/utils/i18n/domain';
import { useI18n } from '#/utils/i18n/react';

type InputProps = Omit<ComponentProps<'input'>, 'hidden' | 'readOnly'> & {
  label?: string;
  formKey: string;
  i18nInput?: I18nInput;
};

export function Input({
  label: _label,
  placeholder: _placeholder,
  formKey,
  className = '',
  i18nInput,
  ...props
}: InputProps) {
  const { t } = useI18n();
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[formKey]?.message as string;

  const label = i18nInput?.label ?? _label;
  const placeholder = i18nInput?.placeholder ?? _placeholder;

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={formKey}
          className="block text-sm font-medium text-gray-700"
        >
          {t(label)}
        </label>
      )}
      <input
        type={formKey}
        id={formKey}
        placeholder={t(placeholder)}
        className={`
          w-full px-3 py-2 border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className}
        `}
        {...register(formKey)}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{t(error)}</p>}
    </div>
  );
}
