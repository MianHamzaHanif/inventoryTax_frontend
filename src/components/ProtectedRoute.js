// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setIsUserAuthenticated(true); // Set this to true if user data is found
    }
  }, [navigate]);

  // Only render children if the user is authenticated
  return isUserAuthenticated ? children : null;
};

export default ProtectedRoute;
