import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopPredictionsList = ({ predictions = [] }) => {
  const { t } = useTranslation('result');

  if (!predictions || predictions.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            {t('topPredictions', 'Top-5 Class Probabilities')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {t('topPredictionsSub', 'Softmax output probabilities across 120 Stanford Dogs classes')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {predictions.map((item, index) => {
          const isTop = index === 0;
          return (
            <div
              key={index}
              className={`p-3.5 rounded-2xl border transition-all ${
                isTop
                  ? 'bg-blue-50/60 border-blue-200 shadow-xs'
                  : 'bg-slate-50/50 border-slate-100 hover:bg-slate-100/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                      isTop
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    #{index + 1}
                  </span>
                  <Link
                    to={`/breeds/${item.slug || item.breed.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.breed}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
                <span
                  className={`text-sm font-extrabold ${
                    isTop ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item.confidence.toFixed(2)}%
                </span>
              </div>

              {/* Individual probability bar */}
              <div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(item.confidence, 100)}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`h-full rounded-full ${
                    isTop
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                      : 'bg-slate-400'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

