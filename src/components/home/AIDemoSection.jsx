import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AIDemoSection = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <section className="py-16 bg-blue-50/60 rounded-3xl p-8 border border-blue-100 mb-16">
      <SectionHeading
        badgeText={t('aiDemo.badge')}
        title={t('aiDemo.title')}
        subtitle={t('aiDemo.subtitle')}
      />

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Badge variant="blue" icon={Sparkles}>{t('result:badge')}</Badge>
            <Badge variant="violet">{t('common:commonStates.demoVisualization')}</Badge>
          </div>
          <span className="text-xs text-slate-400 font-semibold">{t('aiDemo.demoSnapshot')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"
              alt="Demo dog photo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('aiDemo.topClass')}</span>
              <h3 className="text-2xl font-black text-slate-900">Golden Retriever</h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold text-blue-600">96.82%</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('common:commonStates.highConfidence')}
              </span>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              <div className="flex justify-between font-bold text-slate-800">
                <span>Golden Retriever</span>
                <span>96.82%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[96.82%]" />
              </div>

              <div className="flex justify-between font-medium text-slate-500 pt-1">
                <span>Labrador Retriever</span>
                <span>1.87%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full w-[1.87%]" />
              </div>

              <div className="flex justify-between font-medium text-slate-500 pt-1">
                <span>Flat-Coated Retriever</span>
                <span>0.71%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300 rounded-full w-[0.71%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
