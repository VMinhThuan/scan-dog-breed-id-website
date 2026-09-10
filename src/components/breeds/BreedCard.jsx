import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Shield } from 'lucide-react';

export const BreedCard = ({ breed }) => {
  const { t, i18n } = useTranslation(['breeds', 'common']);
  const currentLang = i18n.language || 'vi';

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') {
      if (['small', 'medium', 'large'].includes(val)) {
        return t(`size.${val}`, val);
      }
      return val;
    }
    if (typeof val === 'object') {
      return val[currentLang] || val.en || val.vi || '';
    }
    return String(val);
  };

  return (
    <Link
      to={`/breeds/${breed.slug}`}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={breed.image}
          alt={breed.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
          {getLoc(breed.size)}
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">{getLoc(breed.origin)}</span>
          </div>

          <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
            {breed.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {getLoc(breed.description)}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
          <span>{t('viewProfile', 'View Profile')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

