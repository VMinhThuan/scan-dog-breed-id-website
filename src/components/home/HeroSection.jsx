import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Scan } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const HeroSection = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Badge variant="violet" icon={Sparkles} className="mb-6">
            {t('hero.badge')}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            {t('hero.titlePrefix')}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {t('hero.titleGradient')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <Button
              variant="primary"
              size="lg"
              icon={Sparkles}
              onClick={() => navigate('/identify')}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              onClick={() => navigate('/breeds')}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">{t('hero.highlightBreeds')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">{t('hero.highlightCnn')}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">{t('hero.highlightInstant')}</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200/80 aspect-4/5 max-h-[520px] mx-auto group">
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"
              alt="Golden Retriever Hero AI Demo"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />

            {/* Scanning line animation */}
            <div className="animate-scan-line" />

            {/* Subtle AI Scan Bounding Box */}
            <div className="absolute inset-12 border-2 border-blue-400/40 rounded-2xl pointer-events-none flex flex-col justify-between p-3">
              <div className="flex justify-between">
                <span className="w-4 h-4 border-t-2 border-l-2 border-blue-400" />
                <span className="w-4 h-4 border-t-2 border-r-2 border-blue-400" />
              </div>
              <div className="flex justify-between">
                <span className="w-4 h-4 border-b-2 border-l-2 border-blue-400" />
                <span className="w-4 h-4 border-b-2 border-r-2 border-blue-400" />
              </div>
            </div>

            {/* Floating Card: AI Prediction */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/90 shadow-xl animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Scan className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('hero.floatingCardLabel')}</span>
                </div>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t('hero.matchRate', { rate: 96.8 })}
                </span>
              </div>
              <h4 className="text-lg font-black text-slate-900">Golden Retriever</h4>
              
              {/* Mini probability bar */}
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-[96.8%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
