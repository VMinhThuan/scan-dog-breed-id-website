import React from 'react';
import clsx from 'clsx';

export const FilterChip = ({ label, active = false, onClick, count }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 border',
        active
          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={clsx(
            'px-1.5 py-0.5 rounded-full text-[10px] font-bold',
            active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
};
