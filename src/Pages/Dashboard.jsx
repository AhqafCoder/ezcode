// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated (use Navigate from react-router-dom)
  }

  return (
    <div className="container mx-auto p-4 mt-15" style={{ background: 'black', minHeight: '100vh' }}>
      <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <p className="text-2xl text-pink-500 font-semibold">Logged in Successfully!</p>
        <p className="text-gray-700 mt-2">You can now access your dashboard and manage your account.</p>
      </div>

      {/* Pink Wave Background (Simulated with CSS) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1920x1080/FF1493/000000?text=Pink+Wave")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default Dashboard;