import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Sparkles, ShieldCheck, ListOrdered, Layers } from 'lucide-react';

export const FeaturesSection = () => {
  const { t } = useTranslation('home');

  const features = [
    {
      title: t('features.feat1Title'),
      description: t('features.feat1Desc'),
      icon: Sparkles
    },
    {
      title: t('features.feat2Title'),
      description: t('features.feat2Desc'),
      icon: ShieldCheck
    },
    {
      title: t('features.feat3Title'),
      description: t('features.feat3Desc'),
      icon: ListOrdered
    },
    {
      title: t('features.feat4Title'),
      description: t('features.feat4Desc'),
      icon: Layers
    }
  ];

  return (
    <section className="py-16">
      <SectionHeading
        badgeText={t('features.badge')}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card key={idx} hoverable padding="p-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
