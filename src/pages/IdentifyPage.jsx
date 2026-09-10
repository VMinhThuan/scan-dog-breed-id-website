import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { usePrediction } from '../context/PredictionContext';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { UploadDropzone } from '../components/prediction/UploadDropzone';
import { ImagePreview } from '../components/prediction/ImagePreview';
import { AIProcessingState } from '../components/prediction/AIProcessingState';
import { CheckCircle2, Cpu } from 'lucide-react';
import { Badge } from '../components/common/Badge';

export const IdentifyPage = () => {
  const { t, i18n } = useTranslation('identify');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Nhận diện giống chó')} | DogBreedID`;
  }, [t, i18n.language]);

  const {
    selectedImage,
    selectedImageUrl,
    selectImage,
    removeImage,
    runMockPrediction,
    isProcessing,
    processingStepIndex
  } = usePrediction();

  const navigate = useNavigate();

  const handleStartAnalysis = async () => {
    await runMockPrediction();
    navigate('/result');
  };

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'Identify') }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <Badge variant="blue" className="mb-3">{t('badge', 'AI Identification Workspace')}</Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'Identify Your Dog Breed')}
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t('heroSubtitle', 'Upload a clear dog photograph and let DogBreedID analyze visual features using fine-grained Convolutional Neural Networks.')}
          </p>
        </div>

        {/* Processing State Simulation Overlay */}
        {isProcessing ? (
          <AIProcessingState
            imageUrl={selectedImageUrl}
            currentStepIndex={processingStepIndex}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Upload / Preview */}
            <div className="lg:col-span-7">
              {selectedImageUrl ? (
                <ImagePreview
                  file={selectedImage}
                  imageUrl={selectedImageUrl}
                  onChangePhoto={removeImage}
                  onRemovePhoto={removeImage}
                  onStartAnalysis={handleStartAnalysis}
                />
              ) : (
                <UploadDropzone onImageSelect={selectImage} />
              )}
            </div>

            {/* Right Column: Tips & AI Specs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Identification Tips Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  {t('tips.title', 'For Better Predictions')}
                </h3>

                <ul className="space-y-3.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">{t('tips.lighting.title', 'Good lighting')}</strong>
                      {t('tips.lighting.desc', 'Ensure the dog\'s face and body are brightly lit without heavy shadow.')}
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">{t('tips.subject.title', 'Clear single subject')}</strong>
                      {t('tips.subject.desc', 'Photographs featuring a single dog provide higher classification confidence.')}
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <div>
                      <strong className="text-slate-800 font-semibold block">{t('tips.features.title', 'Visible features')}</strong>
                      {t('tips.features.desc', 'Ears, facial structure, coat texture, and muzzle angle assist feature mapping.')}
                    </div>
                  </li>
                </ul>
              </div>

              {/* System Capabilities Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  {t('spec.title', 'System Specification')}
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block font-medium">{t('spec.classesLabel', 'Supported Classes')}</span>
                    <strong className="text-white text-sm mt-0.5 block">{t('spec.classesValue', '120 Breeds')}</strong>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block font-medium">{t('spec.backboneLabel', 'Model Backbone')}</span>
                    <strong className="text-blue-400 text-sm mt-0.5 block">CNN Transfer</strong>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block font-medium">{t('spec.outputLabel', 'Output Format')}</span>
                    <strong className="text-white text-sm mt-0.5 block">Top-5 Logits</strong>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 block font-medium">{t('spec.explainabilityLabel', 'Explainability')}</span>
                    <strong className="text-violet-400 text-sm mt-0.5 block">Grad-CAM</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </PageTransition>
  );
};
export default IdentifyPage;

