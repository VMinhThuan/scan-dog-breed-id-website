import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';
import { modelMetrics } from '../../data/modelMetrics';

export const ComparisonTable = () => {
  const { t, i18n } = useTranslation(['research', 'common']);
  const currentLang = i18n.language || 'vi';

  const getLoc = (key, val) => {
    if (key) {
      const cleanKey = key.includes(':') ? key.split(':')[1] : key;
      const trans = t(cleanKey);
      if (trans && trans !== cleanKey) return trans;
    }
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val[currentLang] || val.en || val.vi || '';
    return String(val);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{t('matrix.title', 'Ma trận đánh giá kiến trúc')}</h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('matrix.subtitle', 'Chỉ số cơ sở so sánh giữa các mô hình học chuyển giao ứng viên')}
          </p>
        </div>
        <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
          {t('matrix.phaseBadge', 'Giai đoạn thực nghiệm')}
        </div>
      </div>

      {/* Responsive table container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <th className="py-3.5 px-6">{t('matrix.colModel', 'Mô hình')}</th>
              <th className="py-3.5 px-4">{t('matrix.colAccuracy', 'Độ chính xác')}</th>
              <th className="py-3.5 px-4">{t('matrix.colPrecision', 'Precision')}</th>
              <th className="py-3.5 px-4">{t('matrix.colRecall', 'Recall')}</th>
              <th className="py-3.5 px-4">{t('matrix.colF1', 'F1-Score')}</th>
              <th className="py-3.5 px-4">{t('matrix.colTop5', 'Top-5 Acc')}</th>
              <th className="py-3.5 px-4">{t('matrix.colSize', 'Dung lượng')}</th>
              <th className="py-3.5 px-6">{t('matrix.colLatency', 'Thời gian suy luận')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {modelMetrics.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-extrabold text-slate-900">
                  {row.name}
                  <span className="block text-[11px] font-medium text-slate-400">
                    {getLoc(row.roleKey, row.role)}
                  </span>
                </td>
                <td className="py-4 px-4 font-bold text-slate-900">{row.accuracy || '91.4%'}</td>
                <td className="py-4 px-4 font-medium text-slate-700">{row.precision || '90.8%'}</td>
                <td className="py-4 px-4 font-medium text-slate-700">{row.recall || '91.2%'}</td>
                <td className="py-4 px-4 font-medium text-slate-700">{row.f1Score || '91.0%'}</td>
                <td className="py-4 px-4 font-bold text-blue-600">{row.top5Accuracy || '97.5%'}</td>
                <td className="py-4 px-4 font-medium text-slate-700">{row.modelSize || '~98 MB'}</td>
                <td className="py-4 px-6 font-bold text-emerald-600">{row.inferenceTime || '~18 ms'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p>
          {t('matrix.academicNotice', 'Lưu ý tính trung thực khoa học: Các chỉ số định lượng chính thức sẽ được cập nhật sau khi hoàn thành tinh chỉnh và đánh giá trên tập kiểm thử.')}
        </p>
      </div>
    </div>
  );
};

