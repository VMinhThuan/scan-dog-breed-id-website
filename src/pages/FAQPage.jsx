import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SearchInput } from '../components/breeds/SearchInput';
import { FilterChip } from '../components/breeds/FilterChip';
import { FAQAccordion } from '../components/user/FAQAccordion';
import { faqItems, faqCategories } from '../data/faq';
import { EmptyState } from '../components/common/EmptyState';
import { HelpCircle } from 'lucide-react';

export const FAQPage = () => {
  const { t, i18n } = useTranslation('faq');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Câu hỏi thường gặp')} | DogBreedID`;
  }, [t, i18n.language]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getSearchableText = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') return `${val.en || ''} ${val.vi || ''}`;
    return String(val);
  };

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return faqItems.filter((item) => {
      const matchesSearch =
        getSearchableText(item.question).toLowerCase().includes(term) ||
        getSearchableText(item.answer).toLowerCase().includes(term);

      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'FAQ') }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
            {t('hero.badge', 'Trợ giúp & Tài liệu')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t('hero.title', 'Câu hỏi thường gặp')}
          </h1>
          <p className="mt-2 text-base text-slate-600">
            {t('hero.subtitle', 'Tìm câu trả lời liên quan đến phạm vi khóa luận, các mô hình AI và khả năng phân loại của DogBreedID.')}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm('')}
            placeholder={t('searchPlaceholder', 'Tìm kiếm câu hỏi theo từ khóa...')}
          />

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {faqCategories.map((catKey) => (
              <FilterChip
                key={catKey}
                label={t(`categories.${catKey}`, catKey)}
                active={selectedCategory === catKey}
                onClick={() => setSelectedCategory(catKey)}
              />
            ))}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={filteredFaqs} />
          </div>
        ) : (
          <EmptyState
            icon={HelpCircle}
            title={t('empty.title', 'Không tìm thấy câu hỏi nào')}
            description={t('empty.description', 'Chúng tôi không tìm thấy câu hỏi FAQ nào phù hợp với từ khóa hoặc danh mục được chọn.')}
            actionLabel={t('empty.action', 'Xóa tìm kiếm')}
            onAction={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          />
        )}
      </Container>
    </PageTransition>
  );
};
export default FAQPage;

