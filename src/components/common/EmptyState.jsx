import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({
  icon: Icon = SearchX,
  title,
  description,
  actionLabel,
  onAction,
  className
}) => {
  const { t } = useTranslation('common');
  const actualTitle = title || t('noData', 'No data available');
  const actualDesc = description || t('tryAdjustingFilters', 'Try adjusting your search terms or filter settings.');

  return (
    <div className={`flex flex-col items-center justify-center text-center p-10 bg-white rounded-2xl border border-slate-200 shadow-xs ${className}`}>
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{actualTitle}</h3>
      <p className="mt-2 text-sm text-slate-600 max-w-md leading-relaxed">{actualDesc}</p>
      {actionLabel && onAction && (
        <div className="mt-6">
          <Button variant="primary" size="md" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

