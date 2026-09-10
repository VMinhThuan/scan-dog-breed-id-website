import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import IdentifyPage from '../pages/IdentifyPage';
import ResultPage from '../pages/ResultPage';
import BreedsPage from '../pages/BreedsPage';
import BreedDetailPage from '../pages/BreedDetailPage';
import AboutAIPage from '../pages/AboutAIPage';
import ResearchPage from '../pages/ResearchPage';
import HowItWorksPage from '../pages/HowItWorksPage';
import FAQPage from '../pages/FAQPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HistoryPage from '../pages/HistoryPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

import { ProtectedRoute } from '../components/layout/ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/identify" element={<IdentifyPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/breeds" element={<BreedsPage />} />
      <Route path="/breeds/:slug" element={<BreedDetailPage />} />
      <Route path="/about-ai" element={<AboutAIPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* 404 Routes */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;
