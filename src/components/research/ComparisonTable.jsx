import React from 'react';
import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';
import { modelMetrics } from '../../data/modelMetrics';

export const ComparisonTable = () => {
  const { t } = useTranslation('research');

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{t('matrixTitle', 'Architecture Evaluation Matrix')}</h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('matrixSubtitle', 'Comparative baseline benchmarks across transfer learning candidate models')}
          </p>
        </div>
        <div className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 self-start sm:self-auto">
          {t('experimentalPhase', 'Experimental Training Phase')}
        </div>
      </div>

      {/* Responsive table container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <th className="py-3.5 px-6">{t('colModel', 'Model')}</th>
              <th className="py-3.5 px-4">{t('colAccuracy', 'Accuracy')}</th>
              <th className="py-3.5 px-4">{t('colPrecision', 'Precision')}</th>
              <th className="py-3.5 px-4">{t('colRecall', 'Recall')}</th>
              <th className="py-3.5 px-4">{t('colF1', 'F1-Score')}</th>
              <th className="py-3.5 px-4">{t('colTop5', 'Top-5 Acc')}</th>
              <th className="py-3.5 px-4">{t('colSize', 'Model Size')}</th>
              <th className="py-3.5 px-6">{t('colLatency', 'Inference Latency')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {modelMetrics.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-extrabold text-slate-900">
                  {row.name}
                  <span className="block text-[11px] font-medium text-slate-400">
                    {t(row.role, row.role)}
                  </span>
                </td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.accuracy, row.accuracy)}</td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.precision, row.precision)}</td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.recall, row.recall)}</td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.f1Score, row.f1Score)}</td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.top5Accuracy, row.top5Accuracy)}</td>
                <td className="py-4 px-4 font-semibold text-slate-500 italic">{t(row.modelSize, row.modelSize)}</td>
                <td className="py-4 px-6 font-semibold text-slate-500 italic">{t(row.inferenceTime, row.inferenceTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
        <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong>{t('noticeTitle', 'Academic Integrity Notice:')}</strong> {t('noticeBody', 'Final quantitative metrics will be populated upon completion of model fine-tuning and evaluation on test splits.')}
        </p>
      </div>
    </div>
  );
};

