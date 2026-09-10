import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

export const AIProcessingState = ({ imageUrl, currentStepIndex = 0 }) => {
  const { t } = useTranslation('identify');

  const steps = [
    t('steps.0', 'Analyzing image...'),
    t('steps.1', 'Preparing visual features...'),
    t('steps.2', 'Running CNN inference...'),
    t('steps.3', 'Calculating breed probabilities...'),
    t('steps.4', 'Preparing result...')
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white shadow-2xl overflow-hidden max-w-2xl mx-auto my-6">
      <div className="relative rounded-2xl overflow-hidden aspect-4/3 max-h-[360px] bg-slate-950 flex items-center justify-center mb-8 border border-slate-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={t('processing.imageAlt', 'Dog image being analyzed')}
            className="w-full h-full object-cover opacity-70 filter contrast-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-blue-950" />
        )}

        {/* Animated Scanner Line */}
        <div className="animate-scan-line" />

        {/* Semi-transparent grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

        <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
          <Cpu className="w-3.5 h-3.5 animate-spin" />
          <span>ONNX Runtime Active</span>
        </div>
      </div>

      <div className="text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>

        <h3 className="text-2xl font-black text-white mb-2">{t('processing.title', 'Deep Learning Analysis')}</h3>

        {/* Sequential AI status messages */}
        <div className="h-8 flex items-center justify-center">
          <motion.p
            key={currentStepIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-base font-semibold text-blue-400 flex items-center gap-2"
          >
            <span>{steps[currentStepIndex] || steps[0]}</span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </motion.p>
        </div>

        {/* Step indicator pills */}
        <div className="flex gap-2 mt-6">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx <= currentStepIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

