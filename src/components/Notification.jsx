import React from 'react';

function Notification({ message, type }) {
  const styles = {
    position: 'fixed',
    top: '80px',
    right: '20px',
    padding: '15px 20px',
    borderRadius: '5px',
    color: 'white',
    zIndex: 1000,
    animation: 'slideIn 0.3s ease-out',
    background: type === 'success' ? '#4caf50' : '#f44336'
  };

  return (
    <div style={styles}>
      {type === 'success' ? '✅ ' : '❌ '} {message}
    </div>
  );
}

export default Notification;