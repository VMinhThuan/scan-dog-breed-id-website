import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Cpu } from 'lucide-react';

export const ResearchModelCard = ({ model }) => {
  const { t, i18n } = useTranslation('research');
  const currentLang = i18n.language || 'vi';

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return t(val, val);
    if (typeof val === 'object') return val[currentLang] || val.en || val.vi || '';
    return String(val);
  };

  return (
    <Card hoverable padding="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
          <Cpu className="w-5 h-5" />
        </div>
        <Badge variant="blue">{getLoc(model.role)}</Badge>
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-2">{model.name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-6">{getLoc(model.description)}</p>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold">{t('statusLabel', 'Status:')}</span>
        <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
          {getLoc(model.status)}
        </span>
      </div>
    </Card>
  );
};

