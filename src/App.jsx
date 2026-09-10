import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PredictionProvider } from './context/PredictionContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/Toast';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <Router>
      <AuthProvider>
        <PredictionProvider>
          <ToastProvider>
            <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
              <Navbar />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <ToastContainer />
              <Footer />
            </div>
          </ToastProvider>
        </PredictionProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
