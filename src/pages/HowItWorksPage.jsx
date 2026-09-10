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
    document.title = `${t('pageTitle', 'Từ hình ảnh đến kết quả dự đoán')} | DogBreedID`;
  }, [t, i18n.language]);

  const detailedSteps = [
    {
      num: "01",
      title: t('steps.1.title', 'Upload Image'),
      desc: t('steps.1.desc', 'Select a clear dog photograph from your camera roll or desktop (JPG, JPEG, PNG up to 10MB).'),
      icon: UploadCloud
    },
    {
      num: "02",
      title: t('steps.2.title', 'Image Preparation'),
      desc: t('steps.2.desc', 'Client-side image validation formats pixels to 224x224 RGB tensors normalized via ImageNet parameters.'),
      icon: Cpu
    },
    {
      num: "03",
      title: t('steps.3.title', 'CNN Analysis'),
      desc: t('steps.3.desc', 'Convolutional layers process visual patterns across facial structure, ears, coat density, and body contours.'),
      icon: Sparkles
    },
    {
      num: "04",
      title: t('steps.4.title', 'Breed Probabilities'),
      desc: t('steps.4.desc', 'The final Softmax classification layer computes normalized probabilities across 120 Stanford Dogs classes.'),
      icon: Award
    },
    {
      num: "05",
      title: t('steps.5.title', 'Prediction Result'),
      desc: t('steps.5.desc', 'Displays the top predicted breed alongside calibrated confidence scores and inference latency.'),
      icon: Award
    },
    {
      num: "06",
      title: t('steps.6.title', 'Grad-CAM Attention Map'),
      desc: t('steps.6.desc', 'Visual heatmaps highlight spatial image regions contributing to the neural network decision.'),
      icon: Layers
    },
    {
      num: "07",
      title: t('steps.7.title', 'Breed Discovery'),
      desc: t('steps.7.desc', 'Explore detailed breed profiles, characteristics, origin, temperament traits, and similar classes.'),
      icon: Search
    }
  ];

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'How It Works') }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('badge', 'User Journey Guide')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'From Photo to Prediction')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('heroSubtitle', 'Discover what happens step-by-step from the moment an image is uploaded to the final AI result.')}
          </p>
        </div>

        {/* 7-Step Workflow */}
        <div className="space-y-6 mb-16">
          {detailedSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card key={idx} hoverable padding="p-6 sm:p-8" className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 font-black text-xl flex items-center justify-center shrink-0">
                  {step.num}
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
          <h3 className="text-2xl sm:text-3xl font-black mb-3">{t('ctaTitle', 'Try It Yourself')}</h3>
          <p className="text-sm text-slate-300 mb-6">
            {t('ctaSubtitle', 'Test the DogBreedID classification interface with your own dog photo.')}
          </p>
          <Button variant="primary" size="lg" icon={Sparkles} onClick={() => navigate('/identify')}>
            {t('ctaBtn', 'Identify a Dog')}
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
};
export default HowItWorksPage;

