import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchInput } from '../components/breeds/SearchInput';
import { FilterChip } from '../components/breeds/FilterChip';
import { BreedGrid } from '../components/breeds/BreedGrid';
import { breeds } from '../data/breeds';

export const BreedsPage = () => {
  const { t, i18n } = useTranslation('breeds');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Khám phá các giống chó')} | DogBreedID`;
  }, [t, i18n.language]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState('all');
  const [sortOrder, setSortOrder] = useState('A-Z');

  const sizeKeys = ['all', 'small', 'medium', 'large'];

  const getSearchableText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return `${val.en || ''} ${val.vi || ''}`;
    return String(val);
  };

  // Filter & Sort Logic
  const filteredBreeds = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return breeds
      .filter((b) => {
        const matchesSearch =
          b.name.toLowerCase().includes(term) ||
          getSearchableText(b.origin).toLowerCase().includes(term) ||
          getSearchableText(b.breedGroup).toLowerCase().includes(term);

        const matchesSize = selectedSize === 'all' || b.size.toLowerCase() === selectedSize.toLowerCase();

        return matchesSearch && matchesSize;
      })
      .sort((a, b) => {
        if (sortOrder === 'A-Z') return a.name.localeCompare(b.name);
        if (sortOrder === 'Z-A') return b.name.localeCompare(a.name);
        return 0;
      });
  }, [searchTerm, selectedSize, sortOrder]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedSize('all');
    setSortOrder('A-Z');
  };

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'Dog Breeds') }]} />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('badge', 'Dataset Classes')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'Explore Dog Breeds')}
          </h1>
          <p className="mt-2 text-base text-slate-600">
            {t('heroSubtitle', 'Browse the dog breeds supported in the fine-grained computer vision model classification scope.')}
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
            placeholder={t('searchPlaceholder', 'Search breed by name, origin or group...')}
          />

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              {sizeKeys.map((sizeKey) => (
                <FilterChip
                  key={sizeKey}
                  label={t(`size.${sizeKey}`, sizeKey)}
                  active={selectedSize === sizeKey}
                  onClick={() => setSelectedSize(sizeKey)}
                  count={
                    sizeKey === 'all'
                      ? breeds.length
                      : breeds.filter((b) => b.size.toLowerCase() === sizeKey.toLowerCase()).length
                  }
                />
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-400">{t('sortLabel', 'Sort:')}</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="A-Z">{t('sortAZ', 'Name (A–Z)')}</option>
                <option value="Z-A">{t('sortZA', 'Name (Z–A)')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Breed Grid Component */}
        <BreedGrid
          breeds={filteredBreeds}
          onClearFilters={handleClearFilters}
        />
      </Container>
    </PageTransition>
  );
};
export default BreedsPage;

