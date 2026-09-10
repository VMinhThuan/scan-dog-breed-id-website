import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockAuthService } from '../services/mockAuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Frontend mock authentication — replace with backend auth later.
    const initialUser = mockAuthService.getUser();
    if (initialUser) {
      setUser(initialUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const loggedInUser = await mockAuthService.login(email, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const register = async (fullName, email, password, confirmPassword) => {
    const newUser = await mockAuthService.register(fullName, email, password, confirmPassword);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    mockAuthService.logout();
    setUser(null);
  };

  const updateProfile = (name) => {
    const updated = mockAuthService.updateProfile(name);
    if (updated) {
      setUser(updated);
    }
    return updated;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
