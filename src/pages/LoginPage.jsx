import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Scan, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/common/Button';

export const LoginPage = () => {
  const { t, i18n } = useTranslation('auth');

  useEffect(() => {
    document.title = `${t('signIn', 'Đăng nhập')} | DogBreedID`;
  }, [t, i18n.language]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      await login(email, password);
      addToast(t('toastSignInSuccess', 'Signed in successfully.'), 'success');
      navigate(from, { replace: true });
    } catch (err) {
      setErrorMsg(err.message || t('loginFailed', 'Login failed. Check your credentials.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <Container className="py-12 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-12">
          {/* Left Branding Column */}
          <div className="md:col-span-5 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white p-8 flex flex-col justify-between relative overflow-hidden hidden md:flex">
            <div className="flex items-center gap-2.5 z-10">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Scan className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg">DogBreedID</span>
            </div>

            <div className="z-10 my-auto">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-900/60 px-3 py-1 rounded-full border border-blue-800 mb-4 inline-block">
                {t('researcherAccess', 'Researcher Access')}
              </span>
              <h2 className="text-2xl font-black text-white leading-tight mb-3">
                {t('welcomeBackTitle', 'Welcome back to DogBreedID.')}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('welcomeBackSub', 'Sign in to review your saved dog breed identification history, analysis metrics, and model profiles.')}
              </p>
            </div>

            <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-4 z-10">
              // Frontend mock authentication system
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{t('signIn', 'Sign In')}</h2>
              <p className="text-xs text-slate-500 mt-1">
                {t('signInSubtitle', 'Enter your research account credentials below.')}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{t('email', 'Email Address')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="researcher@university.edu"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">{t('password', 'Password')}</label>
                  <span className="text-[11px] text-blue-600 font-semibold cursor-pointer hover:underline">
                    {t('forgotPassword', 'Forgot password?')}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-xs text-slate-600 font-medium">
                  {t('rememberMe', 'Remember me')}
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={loading}
                icon={ArrowRight}
              >
                {t('signIn', 'Sign In')}
              </Button>
            </form>

            <div className="mt-8 text-center text-xs text-slate-500">
              {t('noAccount', "Don't have an account?")}{' '}
              <Link to="/register" className="font-bold text-blue-600 hover:underline">
                {t('createAccount', 'Create an Account')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default LoginPage;

