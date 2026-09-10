import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Home, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage = () => {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `404 | DogBreedID`;
  }, [i18n.language]);

  return (
    <PageTransition>
      <Container className="py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-250px)]">
        <div className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-slate-200 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
            alt={t('notFoundImageAlt', 'Lost dog 404 page visual')}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
            <span className="text-7xl font-black text-white/90 tracking-tighter shadow-md">
              404
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {t('notFoundTitle', 'Looks like this dog wandered off.')}
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-md">
          {t('notFoundSub', "The page you're looking for doesn't exist.")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            icon={Home}
            onClick={() => navigate('/')}
          >
            {t('backHome', 'Back Home')}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={Sparkles}
            onClick={() => navigate('/identify')}
          >
            {t('identifyDogBtn', 'Identify a Dog')}
          </Button>
        </div>
      </Container>
    </PageTransition>
  );
};
export default NotFoundPage;

