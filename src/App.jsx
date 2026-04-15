import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FindDoctorSearch from './components/FindDoctorSearch';
import AppointmentForm from './components/AppointmentForm';
import AppointmentFormIC from './components/AppointmentFormIC';
import GiveReviews from './components/GiveReviews';
import ProfileCard from './components/ProfileCard';
import DoctorCard from './components/DoctorCard';
import Notification from './components/Notification';

function App() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <Router>
      <div>
        {notification && (
          <Notification message={notification.message} type={notification.type} />
        )}
        <Navbar />
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<FindDoctorSearch />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/citas" element={<AppointmentForm showNotification={showNotification} />} />
            <Route path="/citas-ic" element={<AppointmentFormIC showNotification={showNotification} />} />
            <Route path="/reseñas" element={<GiveReviews showNotification={showNotification} />} />
            <Route path="/perfil" element={<ProfileCard />} />
            <Route path="/doctores" element={<DoctorCard showNotification={showNotification} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;