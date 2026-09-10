import React from 'react';
import { useTranslation } from 'react-i18next';
import { BreedCard } from './BreedCard';
import { SkeletonCard } from '../common/SkeletonCard';
import { EmptyState } from '../common/EmptyState';

export const BreedGrid = ({ breeds = [], loading = false, onClearFilters }) => {
  const { t } = useTranslation('breeds');

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (breeds.length === 0) {
    return (
      <EmptyState
        title={t('noBreedsFound', 'No breeds found')}
        description={t('noBreedsFoundSub', "We couldn't find any dog breeds matching your search criteria or size filter.")}
        actionLabel={t('clearFilters', 'Clear Filters')}
        onAction={onClearFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </div>
  );
};

