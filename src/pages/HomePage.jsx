import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { HeroSection } from '../components/home/HeroSection';
import { QuickIdentify } from '../components/home/QuickIdentify';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { FeaturedBreedsSection } from '../components/home/FeaturedBreedsSection';
import { AIDemoSection } from '../components/home/AIDemoSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage = () => {
  const { t, i18n } = useTranslation('home');

  useEffect(() => {
    document.title = `${t('nav.home', 'Trang chủ')} | DogBreedID`;
  }, [t, i18n.language]);

  return (
    <PageTransition>
      <Container>
        <HeroSection />
        <QuickIdentify />
        <HowItWorksSection />
        <StatsSection />
        <FeaturesSection />
        <TechStackSection />
        <FeaturedBreedsSection />
        <AIDemoSection />
        <FinalCTASection />
      </Container>
    </PageTransition>
  );
};
export default HomePage;

