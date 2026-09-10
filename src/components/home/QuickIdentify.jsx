import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePrediction } from '../../context/PredictionContext';
import { UploadDropzone } from '../prediction/UploadDropzone';
import { SectionHeading } from '../common/SectionHeading';

export const QuickIdentify = () => {
  const { t } = useTranslation('home');
  const { selectImage } = usePrediction();
  const navigate = useNavigate();

  const handleImageChoice = (file) => {
    selectImage(file);
    navigate('/identify');
  };

  return (
    <section className="py-16 bg-white rounded-3xl border border-slate-200/90 shadow-xs mb-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeading
          badgeText={t('quickIdentify.badge')}
          title={t('quickIdentify.title')}
          subtitle={t('quickIdentify.subtitle')}
        />

        <div className="max-w-xl mx-auto">
          <UploadDropzone onImageSelect={handleImageChoice} />
        </div>
      </div>
    </section>
  );
};
