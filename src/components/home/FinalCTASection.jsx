import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, BookOpen } from 'lucide-react';
import { Button } from '../common/Button';

export const FinalCTASection = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl text-white shadow-2xl border border-slate-800 text-center px-6 my-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/80 mb-6 inline-block">
          {t('finalCta.badge')}
        </span>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
          {t('finalCta.title')}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
          {t('finalCta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            icon={Sparkles}
            onClick={() => navigate('/identify')}
          >
            {t('finalCta.startIdentification')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={BookOpen}
            onClick={() => navigate('/breeds')}
          >
            {t('finalCta.browseBreeds')}
          </Button>
        </div>
      </div>
    </section>
  );
};
