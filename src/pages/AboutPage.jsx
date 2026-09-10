import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { GraduationCap, Target, Cpu, Code2, Layers } from 'lucide-react';

export const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Giới thiệu đồ án')} | DogBreedID`;
  }, [t, i18n.language]);

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'About Thesis') }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="blue" icon={GraduationCap} className="mb-3">
            {t('hero.badge', 'Bối cảnh học thuật')}
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('hero.title', 'Về dự án DogBreedID')}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t('hero.subtitle', 'Đề tài khóa luận tốt nghiệp ngành Khoa học Máy tính nghiên cứu học sâu, học chuyển giao và tính giải thích mô hình cho phân loại giống chó chi tiết.')}
          </p>
        </div>

        {/* The Problem & Our Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card padding="p-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{t('challenge.title', 'Thách thức')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('challenge.desc', 'Phân loại hình ảnh chi tiết bản chất rất phức tạp do sự khác biệt nhỏ giữa các giống chó có họ hàng gần kết hợp với biến thiên nội lớp lớn.')}
            </p>
          </Card>

          <Card padding="p-8">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{t('approach.title', 'Phương pháp tiếp cận')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('approach.desc', 'Chúng tôi áp dụng học chuyển giao trên các mạng nơ-ron tích chập sâu (ResNet50, EfficientNet-B0, MobileNetV3) kết hợp Grad-CAM và ONNX Runtime.')}
            </p>
          </Card>
        </div>

        {/* Project Goals */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{t('goals.title', 'Mục tiêu chính của dự án')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('goals.g1Title', 'So sánh các mạng CNN')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('goals.g1Desc', 'Đánh giá sự đánh đổi giữa độ chính xác phân loại, số lượng tham số và độ trễ suy luận.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('goals.g2Title', 'ONNX Runtime')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('goals.g2Desc', 'Tối ưu hóa tốc độ thực thi mạng nơ-ron cho việc phục vụ các điểm cuối web thời gian thực.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('goals.g3Title', 'Grad-CAM')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('goals.g3Desc', 'Cung cấp bản đồ nhiệt chú ý trực quan để giải thích các vùng dự đoán và tăng tính minh bạch.')}
              </p>
            </Card>

            <Card padding="p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t('goals.g4Title', 'Nền tảng Web')}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('goals.g4Desc', 'Xây dựng giao diện ứng dụng web hiện đại, tương tác cao phục vụ cho việc bảo vệ khóa luận.')}
              </p>
            </Card>
          </div>
        </div>

        {/* Full Architecture Overview */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-2xl font-black mb-6">{t('stack.title', 'Kiến trúc công nghệ hoàn chỉnh dự kiến')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-blue-400 font-bold block mb-1">{t('stack.frontend', 'Tầng Frontend')}</span>
              <h4 className="text-base font-bold text-white mb-2">ReactJS + Tailwind</h4>
              <p className="text-slate-400">{t('stack.frontendDesc', 'Ứng dụng web đơn trang xây dựng với ReactJS, React Router, biểu tượng Lucide và Framer Motion.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-violet-400 font-bold block mb-1">{t('stack.backend', 'Backend tương lai')}</span>
              <h4 className="text-base font-bold text-white mb-2">FastAPI</h4>
              <p className="text-slate-400">{t('stack.backendDesc', 'Máy chủ API bất đồng bộ Python FastAPI xử lý tải tệp và các phiên làm việc ONNX Runtime.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-emerald-400 font-bold block mb-1">{t('stack.ai', 'Động cơ AI & Mô hình')}</span>
              <h4 className="text-base font-bold text-white mb-2">PyTorch & ONNX</h4>
              <p className="text-slate-400">{t('stack.aiDesc', 'Trọng số học chuyển giao PyTorch được tinh chỉnh và xuất sang ONNX để tăng tốc suy luận.')}</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
              <span className="text-amber-400 font-bold block mb-1">{t('stack.database', 'Tầng Cơ sở dữ liệu')}</span>
              <h4 className="text-base font-bold text-white mb-2">PostgreSQL</h4>
              <p className="text-slate-400">{t('stack.databaseDesc', 'Cơ sở dữ liệu quan hệ PostgreSQL lưu trữ phiên người dùng, nhật ký dữ liệu và lịch sử phân tích.')}</p>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default AboutPage;

