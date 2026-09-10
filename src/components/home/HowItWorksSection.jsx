import React from 'react';
import { useTranslation } from 'react-i18next';
import { UploadCloud, Cpu, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export const HowItWorksSection = () => {
  const { t } = useTranslation('home');

  const steps = [
    {
      num: "01",
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
      icon: UploadCloud
    },
    {
      num: "02",
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
      icon: Cpu
    },
    {
      num: "03",
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20">
      <SectionHeading
        badgeText={t('howItWorks.badge')}
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Card key={idx} hoverable padding="p-8" className="relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-blue-600/30">{step.num}</span>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
