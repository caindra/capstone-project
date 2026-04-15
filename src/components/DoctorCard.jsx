import React, { useState } from 'react';

function DoctorCard({ showNotification }) {
  const [appointments, setAppointments] = useState([
    { id: 1, doctorName: 'Dra. María López', specialty: 'Cardiología', date: '2024-01-20', time: '10:00', status: 'confirmada' },
    { id: 2, doctorName: 'Dr. Carlos Ruiz', specialty: 'Pediatría', date: '2024-01-22', time: '11:00', status: 'confirmada' },
    { id: 3, doctorName: 'Dra. Ana Martínez', specialty: 'Dermatología', date: '2024-01-25', time: '16:00', status: 'pendiente' }
  ]);

  const cancelAppointment = (id) => {
    const appointment = appointments.find(apt => apt.id === id);
    setAppointments(appointments.filter(apt => apt.id !== id));
    showNotification(`Cita con ${appointment.doctorName} cancelada`, 'success');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '30px' }}>👨‍⚕️ Mis Doctores y Citas</h2>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {appointments.map(doctor => (
          <div
            key={doctor.id}
            style={{
              padding: '20px',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{doctor.doctorName}</div>
              <div style={{ color: '#666' }}>🏥 {doctor.specialty}</div>
              <div style={{ color: '#999', fontSize: '14px' }}>
                📅 {doctor.date} - ⏰ {doctor.time}
              </div>
              <div style={{
                display: 'inline-block',
                padding: '3px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                background: doctor.status === 'confirmada' ? '#4caf50' : '#ff9800',
                color: 'white',
                marginTop: '5px'
              }}>
                {doctor.status}
              </div>
            </div>
            
            <button
              onClick={() => cancelAppointment(doctor.id)}
              style={{
                padding: '10px 20px',
                background: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              ❌ Cancelar Cita
            </button>
          </div>
        ))}
      </div>
      
      {appointments.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', background: '#f5f5f5', borderRadius: '10px' }}>
          <p>No tienes citas agendadas</p>
        </div>
      )}
    </div>
  );
}

export default DoctorCard;