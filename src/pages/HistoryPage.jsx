import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { usePrediction } from '../context/PredictionContext';
import { useToast } from '../context/ToastContext';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchInput } from '../components/breeds/SearchInput';
import { HistoryCard } from '../components/user/HistoryCard';
import { ConfirmModal } from '../components/common/ConfirmModal';
import { EmptyState } from '../components/common/EmptyState';
import { History, Award, Layers } from 'lucide-react';
import { StatCard } from '../components/research/StatCard';

export const HistoryPage = () => {
  const { t, i18n } = useTranslation('history');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Lịch sử nhận diện')} | DogBreedID`;
  }, [t, i18n.language]);

  const { predictionHistory, deleteHistoryItem, setPredictionResult } = usePrediction();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Statistics calculation
  const stats = useMemo(() => {
    if (!predictionHistory || predictionHistory.length === 0) {
      return { total: 0, unique: 0, avgConfidence: '0.0%' };
    }

    const total = predictionHistory.length;
    const uniqueBreeds = new Set(predictionHistory.map((item) => item.breed)).size;
    const avg =
      predictionHistory.reduce((acc, curr) => acc + (curr.confidence || 0), 0) / total;

    return {
      total,
      unique: uniqueBreeds,
      avgConfidence: `${avg.toFixed(1)}%`
    };
  }, [predictionHistory]);

  // Filtering & Sorting
  const filteredHistory = useMemo(() => {
    return predictionHistory
      .filter((item) =>
        item.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.model && item.model.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortOption === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
        if (sortOption === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
        if (sortOption === 'highest') return b.confidence - a.confidence;
        return 0;
      });
  }, [predictionHistory, searchTerm, sortOption]);

  const handleViewResult = (item) => {
    setPredictionResult(item);
    navigate('/result');
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      deleteHistoryItem(deleteTarget.id);
      addToast(t('deletedToast', { breed: deleteTarget.breed, defaultValue: `Deleted prediction history for ${deleteTarget.breed}.` }), 'info');
      setDeleteTarget(null);
    }
  };

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'Prediction History') }]} />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('badge', 'User Workspace Logs')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('heroTitle', 'Prediction History')}
          </h1>
          <p className="mt-2 text-base text-slate-600">
            {t('heroSubtitle', 'Review your previous DogBreedID image analyses, confidence scores, and model predictions.')}
          </p>
        </div>

        {/* Statistics Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard
            value={stats.total}
            label={t('statTotal', 'Total Predictions')}
            subtext={t('statTotalSub', 'Analyzed dog images')}
            icon={History}
          />
          <StatCard
            value={stats.unique}
            label={t('statUnique', 'Unique Breeds')}
            subtext={t('statUniqueSub', 'Distinct classes identified')}
            icon={Layers}
          />
          <StatCard
            value={stats.avgConfidence}
            label={t('statAvgConfidence', 'Average Confidence')}
            subtext={t('statAvgConfidenceSub', 'Mean classification score')}
            icon={Award}
          />
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
            placeholder={t('searchPlaceholder', 'Search history by breed...')}
          />

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-400">{t('sortByLabel', 'Sort by:')}</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">{t('sortNewest', 'Newest First')}</option>
              <option value="oldest">{t('sortOldest', 'Oldest First')}</option>
              <option value="highest">{t('sortHighest', 'Highest Confidence')}</option>
            </select>
          </div>
        </div>

        {/* History List or Empty State */}
        {filteredHistory.length > 0 ? (
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                onView={handleViewResult}
                onDelete={setDeleteTarget}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={History}
            title={t('emptyTitle', 'No predictions yet')}
            description={t('emptyDesc', 'Your future DogBreedID image analyses and AI breed classification logs will appear here.')}
            actionLabel={t('emptyAction', 'Identify Your First Dog')}
            onAction={() => navigate('/identify')}
          />
        )}

        {/* Confirmation Modal */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          title={t('modalTitle', 'Delete Prediction Log?')}
          message={t('modalMessage', { breed: deleteTarget?.breed, defaultValue: `Are you sure you want to remove the prediction record for "${deleteTarget?.breed}"? This action cannot be undone.` })}
          confirmText={t('modalConfirm', 'Delete History Log')}
          cancelText={t('modalCancel', 'Cancel')}
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      </Container>
    </PageTransition>
  );
};
export default HistoryPage;

