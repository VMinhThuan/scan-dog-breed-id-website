import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Sparkles, UploadCloud, Cpu, Award, Layers, Search } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';

export const HowItWorksPage = () => {
  const { t, i18n } = useTranslation('howItWorks');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${t('hero.title', 'Từ hình ảnh đến kết quả dự đoán')} | DogBreedID`;
  }, [t, i18n.language]);

  const stepIcons = [UploadCloud, Cpu, Sparkles, Award, Award, Layers, Search];
  const stepsData = t('steps', { returnObjects: true });
  const detailedSteps = Array.isArray(stepsData) ? stepsData.map((s, idx) => ({
    ...s,
    icon: stepIcons[idx] || Sparkles
  })) : [];

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('hero.badge', 'Hướng dẫn quy trình') }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('hero.badge', 'Hướng dẫn quy trình')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('hero.title', 'Từ hình ảnh đến kết quả dự đoán')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('hero.subtitle', 'Khám phá từng bước chi tiết từ lúc chọn ảnh chó đến khi nhận kết quả dự đoán từ AI.')}
          </p>
        </div>

        {/* 7-Step Workflow */}
        <div className="space-y-6 mb-16">
          {detailedSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card key={idx} hoverable padding="p-6 sm:p-8" className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 font-black text-xl flex items-center justify-center shrink-0">
                  {step.num || `0${idx + 1}`}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-blue-600" />
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-10 text-center max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">{t('cta.title', 'Tự mình trải nghiệm')}</h3>
          <p className="text-sm text-slate-300 mb-6">
            {t('cta.subtitle', 'Kiểm thử giao diện phân loại giống chó của DogBreedID với ảnh chụp chú chó của bạn.')}
          </p>
          <Button variant="primary" size="lg" icon={Sparkles} onClick={() => navigate('/identify')}>
            {t('cta.action', 'Nhận diện giống chó')}
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
};
export default HowItWorksPage;

