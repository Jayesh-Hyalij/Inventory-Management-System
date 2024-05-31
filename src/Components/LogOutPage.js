import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/login');
  };

  return (
    <button className='btn btn-primary logout-btn' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;