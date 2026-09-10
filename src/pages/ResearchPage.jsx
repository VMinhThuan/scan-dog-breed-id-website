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
            {t('hero.badge', 'Nghiên cứu khóa luận học thuật')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('hero.title', 'So sánh các kiến trúc CNN cho phân loại giống chó chi tiết')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('hero.description', 'Khóa luận đánh giá nhiều kiến trúc học chuyển giao dựa trên độ chính xác phân loại chi tiết, hiệu quả tính toán, số lượng tham số và độ trễ suy luận khi triển khai.')}
          </p>
        </div>

        {/* Research Objectives */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('objectives.title', 'Mục tiêu nghiên cứu')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thesisObjectives.map((obj, idx) => (
              <Card key={idx} hoverable padding="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  Mục tiêu 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{getLoc(obj.title)}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{getLoc(obj.description)}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Model Architecture Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('models.title', 'Các kiến trúc CNN được đánh giá')}</h2>
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
                {t('chart.title', 'Biểu đồ so sánh chuẩn')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('chart.subtitle', 'Phân bố chỉ số trực quan giữa ResNet50, EfficientNet-B0 và MobileNetV3')}
              </p>
            </div>
            <Badge variant="amber">{t('chart.pendingBadge', 'Chưa có kết quả thực nghiệm')}</Badge>
          </div>

          <div className="h-64 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center">
            <BarChart3 className="w-12 h-12 text-slate-300 mb-3" />
            <h4 className="text-base font-bold text-slate-700">{t('chart.pendingTitle', 'Chưa có kết quả thực nghiệm')}</h4>
            <p className="text-xs text-slate-500 max-w-md mt-1">
              {t('chart.pendingDesc', 'Biểu đồ so sánh định lượng (Độ chính xác vs. Dung lượng mô hình vs. Độ trễ) sẽ được hiển thị sau khi hoàn thành đánh giá huấn luyện.')}
            </p>
          </div>
        </div>

        {/* Stanford Dogs Dataset Breakdown */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-950 px-3 py-1 rounded-full border border-blue-800 mb-3 inline-block">
                {t('dataset.badge', 'Bộ dữ liệu tham chiếu')}
              </span>
              <h2 className="text-3xl font-black text-white mb-4">{datasetSummary.name}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t('dataset.description', 'Nghiên cứu cơ sở sử dụng bộ dữ liệu Stanford Dogs, chứa các hình ảnh phân loại chi tiết được thu thập để kiểm thử thuật toán phân loại thị giác.')}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block font-medium">{t('dataset.totalImages', 'Tổng số ảnh')}</span>
                  <strong className="text-2xl font-black text-white mt-1 block">
                    {datasetSummary.imagesCount}
                  </strong>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-slate-400 block font-medium">{t('dataset.targetClasses', 'Các lớp giống chó')}</span>
                  <strong className="text-2xl font-black text-blue-400 mt-1 block">
                    {datasetSummary.classesCount} {t('dataset.classesValue', 'Giống chó')}
                  </strong>
                </div>
              </div>
            </div>

            {/* Split Breakdown */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-sm font-bold text-slate-300 mb-2">{t('dataset.splitTitle', 'Phân chia bộ dữ liệu')}</h4>
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
                {t('confusion.title', 'Đánh giá Ma trận nhầm lẫn (Confusion Matrix)')}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {t('confusion.subtitle', 'Trực quan hóa tỷ lệ nhầm lẫn giữa các lớp giống chó tương tự nhau')}
              </p>
            </div>
            <Badge variant="violet">{t('confusion.pendingBadge', 'Đang chờ kết quả thực nghiệm')}</Badge>
          </div>

          <div className="h-48 bg-slate-50 rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center">
            <Grid className="w-10 h-10 text-slate-300 mb-2" />
            <h4 className="text-sm font-bold text-slate-700">{t('confusion.pendingTitle', 'Ma trận nhầm lẫn — Chưa có kết quả thực nghiệm')}</h4>
            <p className="text-xs text-slate-500 max-w-md mt-1">
              {t('confusion.pendingDesc', 'Phân tích sự nhầm lẫn giữa các giống chó có ngoại hình gần giống nhau sẽ được cập nhật sau khi chạy tập kiểm thử.')}
            </p>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default ResearchPage;

