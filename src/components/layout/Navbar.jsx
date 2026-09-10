import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Scan, User, History, LogOut, Menu, ChevronDown, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Container } from './Container';
import { Button } from '../common/Button';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const { t } = useTranslation('common');
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', labelKey: 'nav.home' },
    { to: '/identify', labelKey: 'nav.identify' },
    { to: '/breeds', labelKey: 'nav.breeds' },
    { to: '/about-ai', labelKey: 'nav.howAiWorks' },
    { to: '/research', labelKey: 'nav.research' },
    { to: '/about', labelKey: 'nav.about' }
  ];

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Scan className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg xl:text-xl font-black tracking-tight text-slate-900 leading-none">
                  DogBreed<span className="text-blue-600">ID</span>
                </span>
                <span className="text-[9px] xl:text-[10px] font-bold text-violet-600 tracking-wider uppercase mt-0.5">
                  AI Computer Vision
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 shrink-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right Auth & Language Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <LanguageSwitcher />

              {isAuthenticated ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 p-1.5 pl-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-slate-800"
                    aria-expanded={dropdownOpen}
                  >
                    <img
                      src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"}
                      alt={user?.name}
                      className="w-7 h-7 xl:w-8 xl:h-8 rounded-full object-cover border border-slate-200"
                    />
                    <span className="text-xs xl:text-sm font-semibold max-w-[120px] truncate">
                      {user?.name}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs font-medium text-slate-400">{t('nav.signedInAs')}</p>
                        <p className="text-sm font-bold text-slate-900 truncate">{user?.email}</p>
                      </div>

                      <Link
                        to="/profile"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                      >
                        <User className="w-4 h-4 text-slate-400" />
                        {t('nav.profile')}
                      </Link>

                      <Link
                        to="/history"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                      >
                        <History className="w-4 h-4 text-slate-400" />
                        {t('nav.predictionHistory')}
                      </Link>

                      <div className="border-t border-slate-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2.5 w-full text-left px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 font-medium"
                        >
                          <LogOut className="w-4 h-4" />
                          {t('nav.logout')}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 px-2.5 py-2 whitespace-nowrap">
                    {t('nav.signIn')}
                  </Link>
                  <Button variant="primary" size="sm" className="xl:py-2.5 xl:px-4 xl:text-sm text-xs" icon={Sparkles} onClick={() => navigate('/identify')}>
                    {t('nav.tryDogBreedID')}
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
                onClick={() => navigate('/identify')}
              >
                {t('nav.identify')}
              </Button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
