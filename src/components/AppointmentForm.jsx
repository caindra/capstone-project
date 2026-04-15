import React, { useState } from 'react';

function AppointmentForm({ showNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      showNotification('Por favor complete todos los campos', 'error');
      return;
    }
    
    console.log('Cita creada:', formData);
    showNotification('Cita agendada exitosamente', 'success');
    setFormData({ name: '', phone: '', date: '', time: '' });
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📅 Agendar Cita Médica</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre Completo:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Número de Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Fecha:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Hora:</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
          >
            <option value="">Seleccionar hora</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
          </select>
        </div>
        
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          background: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Agendar Cita
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;