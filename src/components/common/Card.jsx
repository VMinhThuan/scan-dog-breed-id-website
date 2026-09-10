import React from 'react';
import clsx from 'clsx';

export const Card = ({
  children,
  className,
  hoverable = false,
  padding = 'p-6',
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300',
        padding,
        hoverable && 'hover:shadow-md hover:-translate-y-1 hover:border-blue-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
