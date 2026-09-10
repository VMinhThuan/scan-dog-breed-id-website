import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { usePrediction } from '../context/PredictionContext';
import { useToast } from '../context/ToastContext';
import { PageTransition } from '../components/common/PageTransition';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { StatCard } from '../components/research/StatCard';
import { Button } from '../components/common/Button';
import { Mail, Calendar, Edit2, Key, LogOut, Trash2, Award, History, Layers } from 'lucide-react';

export const ProfilePage = () => {
  const { t, i18n } = useTranslation('profile');

  useEffect(() => {
    document.title = `${t('pageTitle', 'Hồ sơ người dùng')} | DogBreedID`;
  }, [t, i18n.language]);

  const { user, updateProfile, logout } = useAuth();
  const { predictionHistory } = usePrediction();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (name.trim()) {
      updateProfile(name.trim());
      addToast(t('toastUpdated', 'Profile updated successfully.'), 'success');
      setIsEditing(false);
    }
  };

  const handleLogout = () => {
    logout();
    addToast(t('toastLoggedOut', 'Logged out.'), 'info');
    navigate('/');
  };

  // Stats calculation
  const totalCount = predictionHistory ? predictionHistory.length : 0;
  const uniqueCount = predictionHistory ? new Set(predictionHistory.map((i) => i.breed)).size : 0;
  const highestConf = predictionHistory && predictionHistory.length > 0
    ? `${Math.max(...predictionHistory.map((i) => i.confidence || 0)).toFixed(1)}%`
    : '0.0%';

  return (
    <PageTransition>
      <Container className="py-8">
        <Breadcrumb items={[{ label: t('breadcrumb', 'Profile') }]} />

        {/* Profile Hero Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 bg-slate-900 shrink-0">
              <img
                src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{user?.name}</h1>
              <p className="text-sm font-semibold text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                <Mail className="w-4 h-4 text-blue-600" />
                {user?.email}
              </p>
              <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                {t('memberSince', 'Member since')} {user?.joinedDate || 'September 2026'}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="secondary"
                size="sm"
                icon={Edit2}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? t('cancelEdit', 'Cancel Edit') : t('editProfile', 'Edit Profile')}
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Edit Form */}
        {isEditing && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10 animate-in fade-in">
            <h3 className="text-lg font-bold text-slate-900 mb-4">{t('editDetailsTitle', 'Edit Profile Details')}</h3>
            <form onSubmit={handleSaveProfile} className="max-w-md space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t('fullNameLabel', 'Full Name')}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button type="submit" variant="primary" size="md">
                {t('saveChanges', 'Save Changes')}
              </Button>
            </form>
          </div>
        )}

        {/* Account Statistics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard
            value={totalCount}
            label={t('statTotal', 'Total Predictions')}
            subtext={t('statTotalSub', 'Analyzed dog images')}
            icon={History}
          />
          <StatCard
            value={uniqueCount}
            label={t('statUnique', 'Unique Breeds')}
            subtext={t('statUniqueSub', 'Identified breed classes')}
            icon={Layers}
          />
          <StatCard
            value={highestConf}
            label={t('statHighest', 'Highest Confidence')}
            subtext={t('statHighestSub', 'Top score benchmark')}
            icon={Award}
          />
        </div>

        {/* Account Actions Section */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">{t('settingsTitle', 'Account Settings & Actions')}</h3>

          <div className="space-y-4 max-w-lg">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-slate-400" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t('changePassTitle', 'Change Password')}</h4>
                  <p className="text-xs text-slate-500">{t('changePassSub', 'Update security credentials')}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addToast(t('toastChangePassDemo', 'Password change demo interface'), 'info')}
              >
                {t('changeBtn', 'Change')}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <LogOut className="w-5 h-5 text-slate-400" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t('logoutTitle', 'Sign Out')}</h4>
                  <p className="text-xs text-slate-500">{t('logoutSub', 'End your current session')}</p>
                </div>
              </div>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                {t('logoutBtn', 'Logout')}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-rose-50/50 border border-rose-100 opacity-60">
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-rose-500" />
                <div>
                  <h4 className="text-sm font-bold text-rose-900">{t('deleteAccountTitle', 'Delete Account')}</h4>
                  <p className="text-xs text-rose-600">{t('deleteAccountSub', 'Available after backend integration')}</p>
                </div>
              </div>
              <Button variant="danger" size="sm" disabled>
                {t('deleteBtn', 'Delete')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};
export default ProfilePage;

