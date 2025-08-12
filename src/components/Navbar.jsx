import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Mail, BookOpen, Menu, X, LogIn, LogOut, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    // Navigate to logout page instead of immediate logout
    window.location.href = '/logout';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          EpochCyber
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-content">
          <ul className="navbar-menu">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.path} className="navbar-item">
                  <Link
                    to={item.path}
                    className={`navbar-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    <IconComponent className="navbar-icon" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Auth Section */}
          <div className="navbar-auth">
            {isAuthenticated() ? (
              <div className="user-menu">
                <button 
                  className="user-menu-trigger"
                  onClick={toggleUserMenu}
                >
                  <UserCircle className="user-icon" />
                  <span className="user-name">{user?.name || 'User'}</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="user-dropdown">
                    <div className="user-info">
                      <p className="user-email">{user?.email}</p>
                      <p className="user-role">{user?.role}</p>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button 
                      className="dropdown-item logout-btn"
                      onClick={handleLogout}
                    >
                      <LogOut className="dropdown-icon" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="login-btn">
                <LogIn className="login-icon" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul className={`navbar-mobile ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.path} className="navbar-mobile-item">
              <Link
                to={item.path}
                className={`navbar-mobile-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <IconComponent className="navbar-icon" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
        
        {/* Mobile Auth */}
        <li className="navbar-mobile-item auth-item">
          {isAuthenticated() ? (
            <>
              <div className="mobile-user-info">
                <UserCircle className="navbar-icon" />
                <div>
                  <span className="mobile-user-name">{user?.name}</span>
                  <span className="mobile-user-email">{user?.email}</span>
                </div>
              </div>
              <button 
                className="navbar-mobile-link logout-mobile"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
              >
                <LogOut className="navbar-icon" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="navbar-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="navbar-icon" />
              <span>Login</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
