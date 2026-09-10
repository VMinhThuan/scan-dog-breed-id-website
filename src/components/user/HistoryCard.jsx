import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Cpu, Trash2, Eye } from 'lucide-react';
import { ConfidenceMeter } from '../prediction/ConfidenceMeter';
import { Button } from '../common/Button';

export const HistoryCard = ({ item, onView, onDelete }) => {
  const { t, i18n } = useTranslation('history');
  const currentLang = i18n.language || 'vi';

  const formatDate = (isoString) => {
    try {
      const locale = currentLang === 'vi' ? 'vi-VN' : 'en-US';
      return new Date(isoString).toLocaleDateString(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return t('recently', 'Recently');
    }
  };

  const fallbackImage = "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600";

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
          <img
            src={item.imageUrl || fallbackImage}
            alt={item.breed}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
          />
        </div>

        <div className="flex flex-col gap-1 truncate">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(item.createdAt)}
            </span>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md flex items-center gap-1">
              <Cpu className="w-3 h-3" />
              {item.model}
            </span>
          </div>

          <h4 className="text-lg font-black text-slate-900 truncate">{item.breed}</h4>

          <div className="w-44">
            <ConfidenceMeter confidence={item.confidence} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
        <Button
          variant="secondary"
          size="sm"
          icon={Eye}
          onClick={() => onView(item)}
        >
          {t('viewResult', 'View Result')}
        </Button>
        <Button
          variant="danger"
          size="sm"
          icon={Trash2}
          onClick={() => onDelete(item)}
        >
          {t('delete', 'Delete')}
        </Button>
      </div>
    </div>
  );
};

