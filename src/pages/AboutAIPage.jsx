import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { PipelineStep } from '../components/research/PipelineStep';
import { pipelineSteps } from '../data/research';
import { Layers, Zap, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '../components/common/Card';

export const AboutAIPage = () => {
  const { t, i18n } = useTranslation('ai');

  useEffect(() => {
    document.title = `${t('pageTitle', 'AI hoạt động thế nào')} | DogBreedID`;
  }, [t, i18n.language]);

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'How AI Works') }]} />

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <Badge variant="violet" icon={Sparkles} className="mb-3">
            {t('badge', 'Inside the AI Architecture')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'How DogBreedID sees a dog')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('heroSubtitle', 'Explore the computer vision pipeline, deep convolutional neural networks, transfer learning fine-tuning, and Grad-CAM interpretability.')}
          </p>
        </div>

        {/* AI Pipeline Flow Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t('flowTitle', 'End-to-End Classification Flow')}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t('flowSubtitle', 'From raw image matrix input to calibrated Top-5 probability predictions.')}
            </p>
          </div>

          <div className="space-y-4">
            {pipelineSteps.map((stepItem, idx) => (
              <PipelineStep
                key={idx}
                step={stepItem.step}
                title={stepItem.title}
                description={stepItem.description}
                detail={stepItem.detail}
                isLast={idx === pipelineSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Image Preprocessing Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-950 px-3 py-1 rounded-full border border-blue-800 mb-3 inline-block">
              {t('stage1Badge', 'Stage 1: Tensor Transformation')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t('stage1Title', 'Image Preprocessing & Normalization')}
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              {t('stage1Subtitle', 'Before feeding pixels into deep convolutional layers, images undergo standard matrix transformations.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center mb-3">1</span>
              <h4 className="font-bold text-white text-base mb-1">{t('prep1Title', 'RGB Image')}</h4>
              <p className="text-slate-400">{t('prep1Desc', 'Raw input photo submitted by user in JPG or PNG format.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center mb-3">2</span>
              <h4 className="font-bold text-white text-base mb-1">{t('prep2Title', 'Resize')}</h4>
              <p className="text-slate-400">{t('prep2Desc', 'Bilinear interpolation resizes image to uniform 224x224 resolution.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center mb-3">3</span>
              <h4 className="font-bold text-white text-base mb-1">{t('prep3Title', 'Normalize')}</h4>
              <p className="text-slate-400">{t('prep3Desc', 'Standardized using ImageNet mean [0.485, 0.456, 0.406] and std [0.229, 0.224, 0.225].')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center mb-3">4</span>
              <h4 className="font-bold text-white text-base mb-1">{t('prep4Title', 'Tensor Input')}</h4>
              <p className="text-slate-400">{t('prep4Desc', 'Batch shape (1, 3, 224, 224) ready for CNN forward pass execution.')}</p>
            </div>
          </div>
        </div>

        {/* Feature Hierarchies */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t('hierarchyTitle', 'Hierarchical Feature Learning')}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t('hierarchySubtitle', 'CNNs learn increasingly abstract representations across network depth.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card padding="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">{t('layer1Badge', 'Layer Group 1')}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('layer1Title', 'Edges & Lines')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t('layer1Desc', 'Early layers detect low-level color gradients, orientation, and edge boundaries.')}</p>
            </Card>

            <Card padding="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">{t('layer2Badge', 'Layer Group 2')}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('layer2Title', 'Textures & Fur')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t('layer2Desc', 'Mid-level layers identify fur coat patterns, nose textures, and eye contours.')}</p>
            </Card>

            <Card padding="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">{t('layer3Badge', 'Layer Group 3')}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('layer3Title', 'Facial Parts')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t('layer3Desc', 'Deeper layers assemble ears, muzzle shape, skull geometry, and eye positions.')}</p>
            </Card>

            <Card padding="p-6">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">{t('layer4Badge', 'Layer Group 4')}</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('layer4Title', 'Breed Traits')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{t('layer4Desc', 'Final feature maps encode fine-grained breed distinctions across 120 target classes.')}</p>
            </Card>
          </div>
        </div>

        {/* Grad-CAM & ONNX Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Grad-CAM Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="violet" icon={Layers}>{t('gradcamBadge', 'Grad-CAM Interpretability')}</Badge>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t('gradcamTitle', 'Understanding AI Attention')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t('gradcamDesc', 'Grad-CAM uses gradients flowing into the final convolutional layer to produce a coarse localization map highlighting important regions for predicting a concept.')}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>{t('disclaimerTitle', 'Scientific Disclaimer:')}</strong> {t('disclaimerBody', 'Grad-CAM serves as an interpretability visual tool, not proof of exact human reasoning.')}
              </p>
            </div>
          </div>

          {/* ONNX Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="blue" icon={Zap}>{t('onnxBadge', 'ONNX Runtime Optimization')}</Badge>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{t('onnxTitle', 'Deployment Acceleration')}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {t('onnxDesc', 'Trained PyTorch weights are exported to Open Neural Network Exchange (ONNX) format for hardware-optimized CPU/GPU web inference latency.')}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 flex items-center justify-between font-bold">
              <span>PyTorch (.pt)</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span>ONNX Graph</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span>ONNX Runtime</span>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default AboutAIPage;

