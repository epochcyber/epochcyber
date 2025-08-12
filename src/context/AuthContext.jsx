import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('epochcyber_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('epochcyber_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo credentials - in real app, this would be an API call
    const demoUsers = [
      { 
        id: 1, 
        email: 'admin@epochcyber.com', 
        password: 'admin123', 
        name: 'Admin User',
        role: 'admin'
      },
      { 
        id: 2, 
        email: 'user@epochcyber.com', 
        password: 'user123', 
        name: 'John Doe',
        role: 'user'
      }
    ];

    const foundUser = demoUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        loginTime: new Date().toISOString()
      };
      
      setUser(userSession);
      localStorage.setItem('epochcyber_user', JSON.stringify(userSession));
      setIsLoading(false);
      return { success: true, user: userSession };
    } else {
      setIsLoading(false);
      return { success: false, error: 'Invalid email or password' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('epochcyber_user');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
