import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export const ErrorState = ({
  title,
  message,
  onRetry,
  className
}) => {
  const { t } = useTranslation('common');
  const actualTitle = title || t('somethingWentWrong', 'Something went wrong');
  const actualMessage = message || t('errorOccurred', 'An unexpected error occurred while loading data. Please try again.');

  return (
    <div className={`flex flex-col items-center justify-center text-center p-10 bg-rose-50/50 border border-rose-200/80 rounded-2xl ${className}`}>
      <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-slate-900">{actualTitle}</h3>
      <p className="mt-2 text-sm text-slate-600 max-w-md leading-relaxed">{actualMessage}</p>
      {onRetry && (
        <div className="mt-6">
          <Button variant="danger" icon={RefreshCw} onClick={onRetry}>
            {t('tryAgain', 'Try Again')}
          </Button>
        </div>
      )}
    </div>
  );
};

