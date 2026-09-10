import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

export const ConfidenceMeter = ({ confidence = 96.82 }) => {
  const { t } = useTranslation('result');

  const getLevel = (score) => {
    if (score >= 85) {
      return {
        label: t('highConfidence', 'High Confidence'),
        variant: 'emerald',
        icon: CheckCircle2,
        barColor: 'from-emerald-500 to-teal-500'
      };
    }
    if (score >= 60) {
      return {
        label: t('moderateConfidence', 'Moderate Confidence'),
        variant: 'amber',
        icon: AlertTriangle,
        barColor: 'from-amber-500 to-orange-500'
      };
    }
    return {
      label: t('lowConfidence', 'Low Confidence'),
      variant: 'rose',
      icon: Info,
      barColor: 'from-rose-500 to-red-500'
    };
  };

  const level = getLevel(confidence);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black text-slate-900 tracking-tight">
            {confidence.toFixed(2)}%
          </span>
          <Badge variant={level.variant} icon={level.icon}>
            {level.label}
          </Badge>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(confidence, 100)}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${level.barColor}`}
        />
      </div>
    </div>
  );
};

