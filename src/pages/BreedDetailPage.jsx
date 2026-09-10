import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { EmptyState } from '../components/common/EmptyState';
import { BreedCard } from '../components/breeds/BreedCard';
import { breeds } from '../data/breeds';
import { Sparkles, MapPin } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const BreedDetailPage = () => {
  const { t, i18n } = useTranslation(['breeds', 'common']);
  const currentLang = i18n.language || 'vi';
  const { slug } = useParams();
  const navigate = useNavigate();

  const breed = breeds.find((b) => b.slug === slug || String(b.id) === String(slug));

  useEffect(() => {
    if (breed) {
      document.title = `${breed.name} | DogBreedID`;
    }
  }, [breed, i18n.language]);

  const getLoc = (val) => {
    if (!val) return '';
    if (typeof val === 'string') {
      if (['small', 'medium', 'large'].includes(val)) {
        return t(`size.${val}`, val);
      }
      return val;
    }
    if (typeof val === 'object') {
      return val[currentLang] || val.en || val.vi || '';
    }
    return String(val);
  };

  const getTraits = (val) => {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === 'object') {
      return val[currentLang] || val.en || val.vi || [];
    }
    return [];
  };

  if (!breed) {
    return (
      <PageTransition>
        <Container className="py-16">
          <Breadcrumb items={[{ to: '/breeds', label: t('breadcrumb', 'Breeds') }, { label: t('notFound', 'Not Found') }]} />
          <EmptyState
            title={t('breedNotFound', 'Breed not found')}
            description={t('breedNotFoundSub', 'The requested dog breed could not be located in our dataset database.')}
            actionLabel={t('exploreBreedsBtn', 'Explore Breeds')}
            onAction={() => navigate('/breeds')}
          />
        </Container>
      </PageTransition>
    );
  }

  // Get similar breeds by slugs or fallback to top breeds
  const similarBreedsList = breeds
    .filter((b) => b.slug !== breed.slug && (breed.similarBreeds?.includes(b.slug) || breed.similarBreeds?.includes(b.id)))
    .slice(0, 4);

  const fallbackSimilar = similarBreedsList.length > 0 ? similarBreedsList : breeds.filter((b) => b.slug !== breed.slug).slice(0, 4);

  const charRatings = [
    { label: t('charFriendliness', 'Friendliness'), key: 'friendliness' },
    { label: t('charEnergy', 'Energy Level'), key: 'energy' },
    { label: t('charTrainability', 'Trainability'), key: 'trainability' },
    { label: t('charAdaptability', 'Adaptability'), key: 'adaptability' },
    { label: t('charGrooming', 'Grooming Needs'), key: 'grooming' },
    { label: t('charExercise', 'Exercise Needs'), key: 'exercise' }
  ];

  const traits = getTraits(breed.temperament);

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb
          items={[
            { to: '/breeds', label: t('breadcrumb', 'Breeds') },
            { label: breed.name }
          ]}
        />

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-900 aspect-4/3 lg:aspect-square border border-slate-200">
              <img
                src={breed.image}
                alt={breed.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="blue">{getLoc(breed.size)}</Badge>
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-600 font-bold mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{getLoc(breed.origin)}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {breed.name}
                </h1>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  {getLoc(breed.description)}
                </p>
              </div>

              {/* Quick Fact Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">{t('breedGroupLabel', 'Breed Group')}</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{getLoc(breed.breedGroup)}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">{t('lifeExpectancyLabel', 'Life Expectancy')}</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{getLoc(breed.lifeExpectancy)}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 font-medium block">{t('averageWeightLabel', 'Average Weight')}</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{getLoc(breed.weight) || getLoc(breed.averageWeight)}</span>
                </div>
              </div>

              {/* Temperament Pills */}
              {traits.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    {t('temperamentTitle', 'Personality & Temperament')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {traits.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Sparkles}
                  onClick={() => navigate('/identify')}
                >
                  {t('identifyThisBreedBtn', 'Identify This Breed Now')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Characteristics Section (Rating Bars 1-5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-6">{t('characteristicsTitle', 'Breed Characteristics')}</h3>
            
            <div className="space-y-5">
              {charRatings.map(({ label, key }) => {
                const rating = breed.characteristics?.[key] || 4;
                return (
                  <div key={key}>
                    <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-1.5">
                      <span>{label}</span>
                      <span className="text-blue-600 font-extrabold">{rating} / 5</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex gap-1 p-0.5 border border-slate-200/60">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-full flex-1 rounded-full transition-all ${
                            i < rating ? 'bg-blue-600' : 'bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Specifications Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{t('detailSpecTitle', 'Detailed Specification')}</h3>

              <dl className="space-y-4 text-xs">
                <div className="flex justify-between pb-3 border-b border-slate-100">
                  <dt className="text-slate-400 font-medium">{t('heightLabel', 'Height Range')}</dt>
                  <dd className="font-bold text-slate-800">{getLoc(breed.height) || getLoc(breed.averageHeight)}</dd>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-100">
                  <dt className="text-slate-400 font-medium">{t('weightLabel', 'Weight Range')}</dt>
                  <dd className="font-bold text-slate-800">{getLoc(breed.weight) || getLoc(breed.averageWeight)}</dd>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-100">
                  <dt className="text-slate-400 font-medium">{t('coatLabel', 'Coat Features')}</dt>
                  <dd className="font-bold text-slate-800 text-right max-w-[180px]">{getLoc(breed.coat)}</dd>
                </div>
                <div className="flex justify-between pb-3 border-b border-slate-100">
                  <dt className="text-slate-400 font-medium">{t('originLabel', 'Origin Country')}</dt>
                  <dd className="font-bold text-slate-800">{getLoc(breed.origin)}</dd>
                </div>
              </dl>
            </div>

            {breed.appearance && (
              <div className="mt-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900">
                <strong className="block font-bold mb-1">{t('appearanceProfileTitle', 'Appearance Profile:')}</strong>
                {getLoc(breed.appearance)}
              </div>
            )}
          </div>
        </div>

        {/* Similar Breeds Row */}
        {fallbackSimilar.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-black text-slate-900 mb-6">{t('similarBreedsTitle', 'Similar Breed Classes')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fallbackSimilar.map((item) => (
                <BreedCard key={item.id} breed={item} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </PageTransition>
  );
};
export default BreedDetailPage;

