import React, { useState } from 'react';

function FindDoctorSearch({ onSelectDoctor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dra. María López', specialty: 'Cardiología', location: 'Centro Médico Norte' },
    { id: 2, name: 'Dr. Carlos Ruiz', specialty: 'Pediatría', location: 'Clínica Sur' },
    { id: 3, name: 'Dra. Ana Martínez', specialty: 'Dermatología', location: 'Centro Especialidades' },
    { id: 4, name: 'Dr. Juan Pérez', specialty: 'Oftalmología', location: 'Hospital Central' },
    { id: 5, name: 'Dra. Laura Gómez', specialty: 'Ginecología', location: 'Clínica Mujer' }
  ]);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectDoctor = (doctor) => {
    if (onSelectDoctor) {
      onSelectDoctor(doctor);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>🏥 MediApp</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          Tu salud en buenas manos - Agenda citas con los mejores especialistas
        </p>
      </div>
      <h3>🔍 Buscar Doctor</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar por nombre o especialidad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px'
          }}
        />
      </div>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {filteredDoctors.map(doctor => (
          <div
            key={doctor.id}
            onClick={() => handleSelectDoctor(doctor)}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              background: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{doctor.name}</div>
            <div style={{ color: '#666' }}>🏥 {doctor.specialty}</div>
            <div style={{ color: '#999', fontSize: '14px' }}>📍 {doctor.location}</div>
          </div>
        ))}
      </div>
      
      {filteredDoctors.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999' }}>No se encontraron doctores</p>
      )}
    </div>
  );
}

export default FindDoctorSearch;
