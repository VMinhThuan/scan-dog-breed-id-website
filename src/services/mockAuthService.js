/**
 * Mock Frontend Authentication Service
 * 
 * FUTURE BACKEND INTEGRATION PLACEHOLDERS:
 * - POST /api/auth/login (JWT / OAuth session)
 * - POST /api/auth/register (Create account)
 * - GET /api/auth/me (Get profile)
 * - PUT /api/auth/profile (Update details)
 * 
 * NOTE: Frontend mock authentication only — replace with backend authentication later.
 */

export const mockAuthService = {
  getUser() {
    try {
      const storedUser = localStorage.getItem('dogbreedid_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error('Error fetching user from localStorage:', e);
      return null;
    }
  },

  async login(email, password) {
    await new Promise((r) => setTimeout(r, 600));

    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }

    const nameFromEmail = email.split('@')[0];
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    const userObj = {
      id: `usr-${Date.now()}`,
      name: formattedName || 'AI Researcher',
      email: email,
      joinedDate: 'September 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    };

    localStorage.setItem('dogbreedid_user', JSON.stringify(userObj));
    return userObj;
  },

  async register(fullName, email, password, confirmPassword) {
    await new Promise((r) => setTimeout(r, 600));

    if (!fullName || fullName.trim().length === 0) {
      throw new Error('Full Name is required.');
    }
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters long.');
    }
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match.');
    }

    const userObj = {
      id: `usr-${Date.now()}`,
      name: fullName.trim(),
      email: email,
      joinedDate: 'September 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    };

    localStorage.setItem('dogbreedid_user', JSON.stringify(userObj));
    return userObj;
  },

  logout() {
    localStorage.removeItem('dogbreedid_user');
  },

  updateProfile(name) {
    const userObj = this.getUser();
    if (userObj) {
      userObj.name = name;
      localStorage.setItem('dogbreedid_user', JSON.stringify(userObj));
      return userObj;
    }
    return null;
  }
};
