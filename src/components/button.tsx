import { ComponentProps } from 'react';
import { Button as HeadlessuiButton } from '@headlessui/react';

import { classNames } from '#/utils/core/react';
import { useI18n } from '#/utils/i18n/react';
import { Link } from '#/utils/routing/react';

export type ButtonProps = {
  link?: ComponentProps<typeof Link>;
  variant?: 'flat' | 'inline' | 'outline';
  state?: 'default';
  label: string;
  reset?: boolean;
} & Pick<ComponentProps<'button'>, 'onClick' | 'className' | 'disabled'>;

export function Button({
  link: linkProps,
  variant = 'flat',
  state = 'default',
  label,
  disabled = false,
  className,
  onClick,
  reset = false,
}: ButtonProps) {
  const { t } = useI18n();

  const type = onClick ? 'button' : reset ? 'reset' : 'submit';

  const baseStyles = 'text-center py-2 px-6 rounded-lg button-shadow';

  const variants = {
    flat: {
      default: classNames(
        'bg-primary-500 text-on-primary-500',
        'hover:bg-primary-600',
        'active:bg-primary-700',
      ),
      disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    },
    outline: {
      default: 'outline text-primary-600',
      disabled: 'outline text-gray-400 cursor-not-allowed',
    },
    inline: {
      default: classNames('text-primary-600', 'hover:underline', 'py-0 px-0'),
      disabled: classNames('text-gray-400 cursor-not-allowed', 'py-0 px-0'),
    },
  };

  if (linkProps) {
    return (
      <HeadlessuiButton
        as={Link}
        {...linkProps}
        disabled={disabled}
        className={classNames(
          baseStyles,
          disabled ? variants[variant].disabled : variants[variant][state],
          className,
        )}
      >
        {t(label)}
      </HeadlessuiButton>
    );
  }

  return (
    <HeadlessuiButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseStyles,
        disabled ? variants[variant].disabled : variants[variant][state],
        className,
      )}
    >
      {t(label)}
    </HeadlessuiButton>
  );
}
