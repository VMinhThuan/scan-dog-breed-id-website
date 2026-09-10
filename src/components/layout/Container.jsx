import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, className, size = 'default' }) => {
  const sizes = {
    small: 'max-w-4xl',
    default: 'max-w-[1440px] 2xl:max-w-[1536px]',
    wide: 'max-w-[1600px] 2xl:max-w-[1720px]',
    full: 'max-w-full'
  };

  return (
    <div className={clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className)}>
      {children}
    </div>
  );
};
