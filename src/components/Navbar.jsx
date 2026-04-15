import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('userName');
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || 'Usuario');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav style={{
      background: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      flexWrap: 'wrap'
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        🏥 MediApp
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/citas" style={{ color: 'white', textDecoration: 'none' }}>Citas</Link>
        
        {isLoggedIn && (
          <Link to="/citas" style={{ color: 'white', textDecoration: 'none' }}>Cita</Link>
        )}
        
        {!isLoggedIn ? (
          <>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Iniciar Sesión</Link>
            <Link to="/signup" style={{ 
              color: 'white', 
              textDecoration: 'none',
              background: '#e74c3c',
              padding: '8px 16px',
              borderRadius: '5px'
            }}>Registrarse</Link>
          </>
        ) : (
          <>
            <span>👋 Hola, {userName}</span>
            <button onClick={handleLogout} style={{
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;