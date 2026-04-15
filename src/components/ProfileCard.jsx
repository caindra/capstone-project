import React, { useState, useEffect } from 'react';

function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    joinDate: '2024-01-15'
  });
  const [editData, setEditData] = useState({});

  useEffect(() => {
    // Cargar datos del usuario desde localStorage
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    
    setUserData({
      name: userName || 'María González',
      email: userEmail || 'maria@email.com',
      phone: '+34 612 345 678',
      role: 'paciente',
      joinDate: '2024-01-15'
    });
  }, []);

  const handleEdit = () => {
    setEditData({ ...userData });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setUserData(editData);
    localStorage.setItem('userName', editData.name);
    localStorage.setItem('userEmail', editData.email);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{
          width: '100px',
          height: '100px',
          background: '#2c3e50',
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          color: 'white'
        }}>
          👤
        </div>
      </div>
      
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Mi Perfil</h2>
      
      {!isEditing ? (
        // Vista de tarjeta de perfil
        <div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
            <strong>Nombre:</strong> {userData.name}
          </div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
            <strong>Correo Electrónico:</strong> {userData.email}
          </div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
            <strong>Teléfono:</strong> {userData.phone}
          </div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
            <strong>Rol:</strong> {userData.role}
          </div>
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
            <strong>Miembro desde:</strong> {userData.joinDate}
          </div>
          
          <button onClick={handleEdit} style={{
            width: '100%',
            padding: '12px',
            background: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            ✏️ Editar Perfil
          </button>
        </div>
      ) : (
        // Formulario de edición
        <div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={editData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={editData.phone}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleSave} style={{
              flex: 1,
              padding: '12px',
              background: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              💾 Guardar
            </button>
            <button onClick={handleCancel} style={{
              flex: 1,
              padding: '12px',
              background: '#999',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              ❌ Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;