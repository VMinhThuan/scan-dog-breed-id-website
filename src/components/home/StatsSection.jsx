import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatCard } from '../research/StatCard';
import { Layers, Database, Cpu, Award } from 'lucide-react';
import { Container } from '../layout/Container';

export const StatsSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-16 bg-slate-950 rounded-3xl text-white my-16 shadow-xl border border-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-violet-900/20 pointer-events-none" />
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
            {t('stats.badge')}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3">{t('stats.title')}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <StatCard
            value="120"
            label={t('stats.breedsLabel')}
            subtext={t('stats.breedsSub')}
            icon={Layers}
            dark
          />
          <StatCard
            value="20,580"
            label={t('stats.imagesLabel')}
            subtext={t('stats.imagesSub')}
            icon={Database}
            dark
          />
          <StatCard
            value="3"
            label={t('stats.architecturesLabel')}
            subtext={t('stats.architecturesSub')}
            icon={Cpu}
            dark
          />
          <StatCard
            value="Top-5"
            label={t('stats.predictionsLabel')}
            subtext={t('stats.predictionsSub')}
            icon={Award}
            dark
          />
        </div>
      </Container>
    </section>
  );
};
