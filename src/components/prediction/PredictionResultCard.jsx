import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Clock, Cpu, RefreshCw, BookOpen } from 'lucide-react';
import { ConfidenceMeter } from './ConfidenceMeter';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const PredictionResultCard = ({
  result,
  onTryAnother,
  onViewBreed
}) => {
  const { t, i18n } = useTranslation('result');
  const currentLang = i18n.language || 'vi';

  if (!result) return null;

  const getInsight = (insightVal) => {
    if (!insightVal) return null;
    if (typeof insightVal === 'string') return insightVal;
    if (typeof insightVal === 'object') return insightVal[currentLang] || insightVal.en || insightVal.vi || '';
    return String(insightVal);
  };

  const insightText = getInsight(result.insight);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 lg:aspect-square border border-slate-200">
          <img
            src={result.imageUrl || "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"}
            alt={result.breed}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {t('analyzedBadge', 'Analyzed')}
          </div>
          {result.isDemo && (
            <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-slate-300 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-slate-800">
              {t('demoOutputBadge', 'Demo Output')}
            </div>
          )}
        </div>

        {/* Right Prediction Details */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue" icon={Sparkles}>{t('mostLikelyBreed', 'Most Likely Breed Match')}</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {result.breed}
            </h2>
          </div>

          <ConfidenceMeter confidence={result.confidence} />

          {/* Scientific Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 font-medium block">{t('inferenceLatency', 'Inference Latency')}</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                ~{result.inferenceTimeMs} ms <span className="text-[10px] text-slate-400 font-normal">({t('demoLabel', 'Demo')})</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 font-medium block">{t('modelBackbone', 'Model Backbone')}</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Cpu className="w-3.5 h-3.5 text-violet-600" />
                {result.model} <span className="text-[10px] text-slate-400 font-normal">({t('candidateLabel', 'Candidate')})</span>
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 font-medium block">{t('datasetRef', 'Dataset Reference')}</span>
              <span className="font-bold text-slate-800 mt-0.5 block truncate">
                Stanford Dogs (120)
              </span>
            </div>
          </div>

          {/* AI Insight Paragraph */}
          {insightText && (
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 leading-relaxed">
              <strong className="text-blue-900 font-bold block mb-1">{t('predictionInsightTitle', 'Prediction Insight:')}</strong>
              {insightText}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              icon={BookOpen}
              onClick={onViewBreed}
              className="w-full sm:w-auto"
            >
              {t('viewBreedProfileBtn', 'View Breed Profile')}
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={RefreshCw}
              onClick={onTryAnother}
              className="w-full sm:w-auto"
            >
              {t('tryAnotherBtn', 'Try Another Photo')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

