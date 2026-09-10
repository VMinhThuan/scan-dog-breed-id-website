import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scan, User, History, LogOut, Sparkles, LogIn } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../common/Button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const MobileMenu = ({ isOpen, onClose, navLinks = [] }) => {
  const { t } = useTranslation('common');
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Prevent body overflow when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                    <Scan className="w-5 h-5" />
                  </div>
                  <span className="font-extrabold text-slate-900 text-lg">DogBreedID</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-xl"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-2.5 text-base font-semibold rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {t(link.labelKey)}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Language Switcher */}
              <LanguageSwitcher isMobile />

              {/* User Section / Auth */}
              {isAuthenticated && (
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 my-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div className="truncate">
                      <p className="font-bold text-slate-900 text-sm truncate">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 pt-2 border-t border-slate-200/60">
                    <button
                      onClick={() => handleNavigate('/profile')}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white rounded-lg"
                    >
                      <User className="w-4 h-4 text-slate-400" />
                      {t('nav.profile')}
                    </button>
                    <button
                      onClick={() => handleNavigate('/history')}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white rounded-lg"
                    >
                      <History className="w-4 h-4 text-slate-400" />
                      {t('nav.predictionHistory')}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg"
                    >
                      <LogOut className="w-4 h-4" />
                      {t('nav.logout')}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={Sparkles}
                onClick={() => handleNavigate('/identify')}
              >
                {t('buttons.tryDogBreedID')}
              </Button>

              {!isAuthenticated && (
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  icon={LogIn}
                  onClick={() => handleNavigate('/login')}
                >
                  {t('nav.signIn')}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
