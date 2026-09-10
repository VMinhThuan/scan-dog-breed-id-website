import React from 'react';
import { Badge } from './Badge';

export const SectionHeading = ({
  badgeText,
  title,
  subtitle,
  centered = true,
  dark = false,
  className
}) => {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto mb-12' : 'max-w-2xl mb-10'}>
      {badgeText && (
        <div className={centered ? 'flex justify-center mb-3' : 'mb-3'}>
          <Badge variant={dark ? 'violet' : 'blue'}>{badgeText}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
