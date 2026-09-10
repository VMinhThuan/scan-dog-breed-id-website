import React from 'react';
import clsx from 'clsx';

export const IconButton = ({
  icon: Icon,
  label,
  variant = 'ghost',
  size = 'md',
  className,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';

  const variants = {
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-300',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-sm',
    outline: 'border border-slate-200 text-slate-700 hover:bg-slate-50 focus:ring-slate-300'
  };

  const sizes = {
    sm: 'p-1.5 text-xs',
    md: 'p-2.5 text-sm',
    lg: 'p-3 text-base'
  };

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};
