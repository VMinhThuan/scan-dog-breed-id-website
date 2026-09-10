import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { usePrediction } from '../context/PredictionContext';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { PredictionResultCard } from '../components/prediction/PredictionResultCard';
import { TopPredictionsList } from '../components/prediction/TopPredictionsList';
import { GradCamDemo } from '../components/prediction/GradCamDemo';
import { BreedSummaryCard } from '../components/prediction/BreedSummaryCard';
import { EmptyState } from '../components/common/EmptyState';
import { breeds } from '../data/breeds';
import { Scan, RefreshCw } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ResultPage = () => {
  const { t, i18n } = useTranslation('result');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Kết quả dự đoán của AI')} | DogBreedID`;
  }, [t, i18n.language]);

  const { predictionResult, resetPrediction } = usePrediction();
  const navigate = useNavigate();

  if (!predictionResult) {
    return (
      <PageTransition>
        <Container className="py-16">
          <Breadcrumb items={[{ label: t('breadcrumbResult', 'Result') }]} />
          <EmptyState
            icon={Scan}
            title={t('noPredictionTitle', 'No prediction available')}
            description={t('noPredictionSub', "You haven't uploaded an image for AI breed classification yet. Upload a dog photo to start.")}
            actionLabel={t('identifyADogBtn', 'Identify a Dog')}
            onAction={() => navigate('/identify')}
          />
        </Container>
      </PageTransition>
    );
  }

  // Find breed details from breeds dataset matching result breed or slug
  const matchedBreedData =
    breeds.find(
      (b) =>
        b.slug === predictionResult.slug ||
        b.name.toLowerCase() === predictionResult.breed.toLowerCase()
    ) || breeds[0];

  const handleTryAnother = () => {
    resetPrediction();
    navigate('/identify');
  };

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ to: '/identify', label: t('breadcrumbIdentify', 'Identify') }, { label: t('breadcrumbResult', 'Result') }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('outputBadge', 'AI Classification Output')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('foundMatch', 'We found a match.')}
          </h1>
          <p className="mt-2 text-base text-slate-600">
            {t('predictedSubtitle', "Here's what DogBreedID predicted from your uploaded dog photograph.")}
          </p>
        </div>

        {/* Primary Prediction Result Card */}
        <div className="mb-10">
          <PredictionResultCard
            result={predictionResult}
            onTryAnother={handleTryAnother}
            onViewBreed={() => navigate(`/breeds/${matchedBreedData.slug}`)}
          />
        </div>

        {/* Top-5 and Grad-CAM Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-6">
            <TopPredictionsList predictions={predictionResult.topPredictions} />
          </div>

          <div className="lg:col-span-6">
            <GradCamDemo imageUrl={predictionResult.imageUrl} />
          </div>
        </div>

        {/* Breed Quick Info Summary */}
        <div className="mb-12">
          <BreedSummaryCard breedData={matchedBreedData} />
        </div>

        {/* Try Again Bottom CTA */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {t('wantAnotherTitle', 'Want to identify another dog?')}
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            {t('wantAnotherSub', 'Upload another photograph to analyze additional dog breeds.')}
          </p>
          <Button variant="primary" size="md" icon={RefreshCw} onClick={handleTryAnother}>
            {t('uploadAnotherBtn', 'Upload Another Photo')}
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
};
export default ResultPage;

