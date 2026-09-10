import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { BreedCard } from '../breeds/BreedCard';
import { breeds } from '../../data/breeds';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedBreedsSection = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  // Show 8 popular breeds
  const featuredBreeds = breeds.slice(0, 8);

  return (
    <section className="py-16">
      <SectionHeading
        badgeText={t('featuredBreeds.badge')}
        title={t('featuredBreeds.title')}
        subtitle={t('featuredBreeds.subtitle')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featuredBreeds.map((breed) => (
          <BreedCard key={breed.id} breed={breed} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          icon={ArrowRight}
          onClick={() => navigate('/breeds')}
        >
          {t('featuredBreeds.viewAll')}
        </Button>
      </div>
    </section>
  );
};
