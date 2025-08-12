import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, LogOut, CheckCircle } from 'lucide-react';
import './Logout.css';

const Logout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Auto logout after 3 seconds
    const timer = setTimeout(() => {
      logout();
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  const handleLogoutNow = () => {
    logout();
    navigate('/');
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-header">
          <div className="logout-logo">
            <Shield className="logout-logo-icon" />
            <h1>EpochCyber</h1>
          </div>
          <div className="logout-icon-wrapper">
            <LogOut className="logout-icon" />
          </div>
          <h2>Logging Out</h2>
          <p>
            {user ? `Goodbye, ${user.name}!` : 'Goodbye!'} 
            <br />
            You will be automatically logged out in a few seconds.
          </p>
        </div>

        <div className="logout-info">
          <div className="info-item">
            <CheckCircle className="info-icon" />
            <span>Your session has been secured</span>
          </div>
          <div className="info-item">
            <CheckCircle className="info-icon" />
            <span>All data has been saved</span>
          </div>
          <div className="info-item">
            <CheckCircle className="info-icon" />
            <span>You can safely close this window</span>
          </div>
        </div>

        <div className="logout-actions">
          <button 
            onClick={handleLogoutNow}
            className="logout-button primary"
          >
            Logout Now
          </button>
          <button 
            onClick={handleCancel}
            className="logout-button secondary"
          >
            Cancel
          </button>
        </div>

        <div className="logout-footer">
          <p>Thank you for using EpochCyber!</p>
          <p className="security-note">
            For your security, always logout when using shared computers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
