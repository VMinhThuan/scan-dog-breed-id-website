import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { GraduationCap, Target, Cpu, Code2, Layers } from 'lucide-react';

export const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Giới thiệu đồ án')} | DogBreedID`;
  }, [t, i18n.language]);

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'About Thesis') }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" icon={GraduationCap} className="mb-3">
            {t('badge', 'Academic Context')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'About DogBreedID')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('heroSubtitle', 'A Computer Science graduation thesis project exploring deep learning, transfer learning, and model interpretability for fine-grained dog breed classification.')}
          </p>
        </div>

        {/* The Problem & Our Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card padding="p-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{t('challengeTitle', 'The Challenge')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('challengeDesc', 'Fine-grained visual categorization is inherently challenging due to subtle inter-class differences between closely related breeds (such as Golden Retriever vs. Labrador Retriever) paired with large intra-class variation in lighting, pose, age, and coat pattern.')}
            </p>
          </Card>

          <Card padding="p-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{t('approachTitle', 'Our Approach')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('approachDesc', 'We leverage transfer learning on deep Convolutional Neural Networks (ResNet50, EfficientNet-B0, MobileNetV3), fine-tuned on the Stanford Dogs Dataset, paired with Grad-CAM activation maps and ONNX Runtime execution for web deployment.')}
            </p>
          </Card>
        </div>

        {/* Project Goals */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('objectivesTitle', 'Core Project Objectives')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('obj1Title', 'Compare CNNs')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('obj1Desc', 'Evaluate trade-offs between classification accuracy, parameter count, and inference latency.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('obj2Title', 'ONNX Runtime')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('obj2Desc', 'Optimize neural network execution speed for real-time web endpoint serving.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('obj3Title', 'Grad-CAM')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('obj3Desc', 'Provide visual attention heatmaps to explain prediction regions and increase model transparency.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('obj4Title', 'Web Platform')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('obj4Desc', 'Build a modern, interactive web user interface designed for thesis defense and live demonstration.')}
              </p>
            </Card>
          </div>
        </div>

        {/* Full Architecture Overview */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-2xl font-black mb-6">{t('techStackTitle', 'Planned End-to-End Technology Stack')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-blue-400 font-bold block mb-1">{t('frontendBadge', 'Frontend Layer')}</span>
              <h4 className="text-base font-bold text-white mb-2">ReactJS + Tailwind</h4>
              <p className="text-slate-400">{t('frontendDesc', 'Single-page web client built with React Router, Lucide icons, and Framer Motion.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-violet-400 font-bold block mb-1">{t('backendBadge', 'Future Backend')}</span>
              <h4 className="text-base font-bold text-white mb-2">FastAPI</h4>
              <p className="text-slate-400">{t('backendDesc', 'Asynchronous Python API server handling file uploads and ONNX Runtime sessions.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-emerald-400 font-bold block mb-1">{t('aiEngineBadge', 'AI & Model Engine')}</span>
              <h4 className="text-base font-bold text-white mb-2">PyTorch & ONNX</h4>
              <p className="text-slate-400">{t('aiEngineDesc', 'Fine-tuned transfer learning weights exported for ONNX inference acceleration.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-amber-400 font-bold block mb-1">{t('databaseBadge', 'Database Layer')}</span>
              <h4 className="text-base font-bold text-white mb-2">PostgreSQL</h4>
              <p className="text-slate-400">{t('databaseDesc', 'Relational database storing user sessions, metadata logs, and analysis history.')}</p>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default AboutPage;

