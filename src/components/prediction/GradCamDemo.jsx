import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Layers, Info } from 'lucide-react';
import { Badge } from '../common/Badge';

export const GradCamDemo = ({ imageUrl }) => {
  const { t } = useTranslation('result');
  const [showHeatmap, setShowHeatmap] = useState(true);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-violet-600" />
              {t('gradcam.title', 'What did the AI focus on?')}
            </h3>
            <Badge variant="violet">{t('gradcam.badge', 'Demo Visualization')}</Badge>
          </div>
          <p className="text-xs text-slate-500">
            {t('gradcam.subtitle', 'Grad-CAM (Gradient-weighted Class Activation Mapping) visualizes regions influencing prediction.')}
          </p>
        </div>

        {/* Toggle Mode */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setShowHeatmap(false)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              !showHeatmap
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('gradcam.original', 'Original')}
          </button>
          <button
            type="button"
            onClick={() => setShowHeatmap(true)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              showHeatmap
                ? 'bg-violet-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t('gradcam.heatmap', 'Grad-CAM Heatmap')}
          </button>
        </div>
      </div>

      {/* Heatmap Image Viewer */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-4/3 max-h-[360px] border border-slate-200">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"}
          alt={t('gradcam.imageAlt', 'Grad-CAM visualization subject')}
          className="w-full h-full object-cover"
        />

        {/* CSS Heatmap Simulation Overlays */}
        {showHeatmap && (
          <>
            <div className="grad-cam-overlay animate-pulse-glow" />
            <div className="grad-cam-overlay-secondary" />
            
            {/* Color Scale Bar Indicator */}
            <div className="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-800 flex items-center gap-2 text-[10px] font-semibold text-white">
              <span>{t('gradcam.lowAttention', 'Low Attention')}</span>
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-500 via-amber-400 to-red-600" />
              <span>{t('gradcam.highFocus', 'High Focus')}</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 p-3.5 rounded-xl bg-violet-50/60 border border-violet-100 flex items-start gap-2.5 text-xs text-violet-800">
        <Info className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
        <p>
          <strong>{t('gradcam.noticeTitle', 'Interpretability Notice:')}</strong> {t('gradcam.noticeBody', 'The production version will display real Grad-CAM outputs generated directly by the AI backend.')}
        </p>
      </div>
    </div>
  );
};
