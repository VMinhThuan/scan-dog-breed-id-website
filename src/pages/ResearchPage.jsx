import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { ResearchModelCard } from '../components/research/ResearchModelCard';
import { ComparisonTable } from '../components/research/ComparisonTable';
import { modelMetrics, datasetSummary } from '../data/modelMetrics';
import { thesisObjectives } from '../data/research';
import { BookOpen, BarChart3, Grid } from 'lucide-react';
import { Card } from '../components/common/Card';

export const ResearchPage = () => {
  const { t, i18n } = useTranslation('research');
  const currentLang = i18n.language || 'vi';

  useEffect(() => {
    document.title = `${t('pageTitle', 'Nghiên cứu khoa học')} | DogBreedID`;
  }, [t, i18n.language]);

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return val[currentLang] || val.en || val.vi || '';
    return String(val);
  };

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'Research') }]} />

        {/* Research Page Hero */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" icon={BookOpen} className="mb-3">
            {t('badge', 'Academic Thesis Research')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('heroTitle', 'Comparing CNN architectures for fine-grained dog breed classification')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('heroSubtitle', 'The thesis evaluates multiple transfer learning architectures based on fine-grained classification accuracy, computational efficiency, parameter count, and deployment latency.')}
          </p>
        </div>

        {/* Research Objectives */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('objectivesTitle', 'Research Objectives')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thesisObjectives.map((obj, idx) => (
              <Card key={idx} hoverable padding="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  {t('objectiveLabel', 'Objective')} 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{getLoc(obj.title)}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{getLoc(obj.description)}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Model Architecture Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('evaluatedArchitectures', 'Evaluated CNN Architectures')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modelMetrics.map((model) => (
              <ResearchModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>

        {/* Architecture Comparison Table */}
        <div className="mb-16">
          <ComparisonTable />
        </div>

        {/* Model Comparison Chart Container (Pending Metrics State) */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                {t('chartTitle', 'Benchmark Comparison Chart')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('chartSubtitle', 'Visual metric distributions across ResNet50, EfficientNet-B0, and MobileNetV3')}
              </p>
            </div>
            <Badge variant="amber">{t('pendingMetricsBadge', 'Experimental Metrics Pending')}</Badge>
          </div>

          <div className="h-64 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center">
            <BarChart3 className="w-12 h-12 text-slate-300 mb-3" />
            <h4 className="text-base font-bold text-slate-700">{t('pendingMetricsTitle', 'Experimental Metrics Pending')}</h4>
            <p className="text-xs text-slate-500 max-w-md mt-1">
              {t('pendingMetricsDesc', 'Quantitative comparison plots (Accuracy vs. Model Size vs. Latency) will be rendered after training evaluation completes.')}
            </p>
          </div>
        </div>

        {/* Stanford Dogs Dataset Breakdown */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-950 px-3 py-1 rounded-full border border-blue-800 mb-3 inline-block">
                {t('datasetBadge', 'Dataset Reference')}
              </span>
              <h2 className="text-3xl font-black text-white mb-4">{datasetSummary.name}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t('datasetDesc', 'The research baseline utilizes the Stanford Dogs Dataset, containing fine-grained category images collected for testing fine-grained visual categorization algorithms.')}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block font-medium">{t('totalImagesLabel', 'Total Images')}</span>
                  <strong className="text-2xl font-black text-white mt-1 block">
                    {datasetSummary.imagesCount}
                  </strong>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block font-medium">{t('targetClassesLabel', 'Target Classes')}</span>
                  <strong className="text-2xl font-black text-blue-400 mt-1 block">
                    {datasetSummary.classesCount} {t('breedsCountSuffix', 'Breeds')}
                  </strong>
                </div>
              </div>
            </div>

            {/* Split Breakdown */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-300 mb-2">{t('splitTitle', 'Dataset Split Partitioning')}</h4>
              {datasetSummary.splits.map((split, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex justify-between items-center text-xs">
                  <span className="font-bold text-white">{getLoc(split.label)}</span>
                  <span className="font-medium text-slate-400">{split.percentage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confusion Matrix Mock Placeholder */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Grid className="w-5 h-5 text-violet-600" />
                {t('matrixEvalTitle', 'Confusion Matrix Evaluation')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('matrixEvalSubtitle', 'Visualizing class misclassification rates across similar breed categories')}
              </p>
            </div>
            <Badge variant="violet">{t('pendingEvalBadge', 'Pending Evaluation Output')}</Badge>
          </div>

          <div className="h-48 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center">
            <Grid className="w-10 h-10 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-slate-700">{t('pendingEvalTitle', 'Confusion Matrix — Experimental Output Pending')}</h4>
            <p className="text-xs text-slate-500 max-w-md mt-1">
              {t('pendingEvalDesc', 'Class confusion analysis between visually overlapping breeds (e.g., Golden Retriever vs. Labrador Retriever) will populate after test split execution.')}
            </p>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default ResearchPage;

