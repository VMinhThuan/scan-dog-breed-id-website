import React from 'react';
import clsx from 'clsx';

export const Badge = ({
  children,
  variant = 'blue',
  icon: Icon,
  className
}) => {
  const variants = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200/80',
    violet: 'bg-violet-50 text-violet-700 border-violet-200/80',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    amber: 'bg-amber-50 text-amber-700 border-amber-200/80',
    rose: 'bg-rose-50 text-rose-700 border-rose-200/80',
    dark: 'bg-slate-900 text-slate-100 border-slate-700'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border shadow-xs',
        variants[variant],
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
};
