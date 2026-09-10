import React from 'react';
import { useTranslation } from 'react-i18next';

export const PipelineStep = ({ step, title, description, detail, isLast = false }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'vi';

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val[currentLang] || val.en || val.vi || '';
    return String(val);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
        {step}
      </div>

      <div className="flex-grow">
        <h4 className="text-xl font-extrabold text-slate-900 mb-1">{getLoc(title)}</h4>
        <p className="text-sm font-semibold text-slate-700 mb-1">{getLoc(description)}</p>
        {detail && <p className="text-xs text-slate-500 leading-relaxed">{getLoc(detail)}</p>}
      </div>
    </div>
  );
};

