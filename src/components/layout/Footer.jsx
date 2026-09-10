import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Scan, ShieldAlert } from 'lucide-react';
import { Container } from './Container';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1 - Brand & Intro */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Scan className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                DogBreed<span className="text-blue-500">ID</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {t('footer.subtitle')}
            </p>
            <div className="text-xs text-slate-500 font-medium">
              {t('footer.thesisContext')}
            </div>
          </div>

          {/* Column 2 - Product */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/identify" className="hover:text-blue-400 transition-colors">{t('footer.identifyDog')}</Link>
              </li>
              <li>
                <Link to="/breeds" className="hover:text-blue-400 transition-colors">{t('footer.dogBreeds')}</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-400 transition-colors">{t('footer.howItWorks')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Research */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('footer.research')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/research" className="hover:text-blue-400 transition-colors">{t('footer.cnnModels')}</Link>
              </li>
              <li>
                <Link to="/about-ai" className="hover:text-blue-400 transition-colors">{t('footer.transferLearning')}</Link>
              </li>
              <li>
                <Link to="/about-ai" className="hover:text-blue-400 transition-colors">{t('footer.gradCam')}</Link>
              </li>
              <li>
                <Link to="/about-ai" className="hover:text-blue-400 transition-colors">{t('footer.onnxRuntime')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Project */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{t('footer.project')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">{t('footer.aboutThesis')}</Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-blue-400 transition-colors">{t('footer.architectureEval')}</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">{t('footer.faq')}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="my-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">{t('footer.disclaimerTitle')}</strong> {t('footer.disclaimerText')}
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-slate-300">{t('footer.privacyTerms')}</Link>
            <Link to="/about" className="hover:text-slate-300">{t('footer.academicContext')}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
