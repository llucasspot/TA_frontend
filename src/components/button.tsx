import { ComponentProps } from 'react';

import { classNames } from '#/utils/core/react';
import { Link, LinkProps } from '#/utils/routing/react';

export type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  link?: LinkProps;
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  link,
  ...props
}: ButtonProps) => {
  // const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const baseStyles =
    'py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
  const getVariantClassName = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  };

  if (link) {
    return (
      <Link
        className={classNames(
          baseStyles,
          getVariantClassName[variant],
          className,
        )}
        {...link}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        baseStyles,
        getVariantClassName[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
