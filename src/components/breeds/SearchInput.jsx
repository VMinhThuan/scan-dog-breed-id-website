import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, X } from 'lucide-react';

export const SearchInput = ({ value, onChange, onClear, placeholder }) => {
  const { t } = useTranslation('breeds');
  const actualPlaceholder = placeholder || t('searchPlaceholder', 'Search dog breeds...');

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={actualPlaceholder}
        className="w-full pl-11 pr-10 py-3 bg-white rounded-2xl border border-slate-200 text-sm font-medium text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
          aria-label={t('clearSearch', 'Clear search input')}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

