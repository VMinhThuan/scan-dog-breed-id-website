import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Info, ArrowRight, ShieldCheck, Heart, Activity } from 'lucide-react';
import { Button } from '../common/Button';

export const BreedSummaryCard = ({ breedData }) => {
  const { t, i18n } = useTranslation(['result', 'breeds']);
  const currentLang = i18n.language || 'vi';

  if (!breedData) return null;

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') {
      if (['small', 'medium', 'large'].includes(val)) {
        return t(`breeds:size.${val}`, val);
      }
      return val;
    }
    if (typeof val === 'object') {
      return val[currentLang] || val.en || val.vi || '';
    }
    return String(val);
  };

  const getTraits = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === 'object') {
      return val[currentLang] || val.en || val.vi || [];
    }
    return [];
  };

  const traits = getTraits(breedData.temperament);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            {t('result:predictedProfile', 'Predicted Breed Profile')}
          </span>
          <span className="text-xs font-semibold text-slate-500">{getLoc(breedData.origin)}</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 mb-2">{breedData.name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
          {getLoc(breedData.description)}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 block">{t('result:breedGroup', 'Breed Group')}</span>
            <span className="text-sm font-bold text-slate-800">{getLoc(breedData.breedGroup)}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 block">{t('result:lifeExpectancy', 'Life Expectancy')}</span>
            <span className="text-sm font-bold text-slate-800">{getLoc(breedData.lifeExpectancy)}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 block">{t('result:sizeCategory', 'Size Category')}</span>
            <span className="text-sm font-bold text-slate-800">{getLoc(breedData.size)}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 block">{t('result:typicalWeight', 'Typical Weight')}</span>
            <span className="text-sm font-bold text-slate-800">{getLoc(breedData.weight) || getLoc(breedData.averageWeight)}</span>
          </div>
        </div>

        {/* Temperament pills */}
        {traits.length > 0 && (
          <div className="mb-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">{t('result:keyTraits', 'Key Traits')}</span>
            <div className="flex flex-wrap gap-1.5">
              {traits.slice(0, 4).map((trait, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link to={`/breeds/${breedData.slug}`}>
        <Button variant="secondary" size="md" fullWidth icon={ArrowRight}>
          {t('result:exploreProfile', 'Explore Full Breed Profile')}
        </Button>
      </Link>
    </div>
  );
};

