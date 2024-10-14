import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ComplexSearch from './components/ComplexSearch';
import ReservationSearch from './components/ReservationSearch';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import MyReservations from './components/MyReservations';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (username: string, password: string) => {
    if (username && password) {
      setIsLoggedIn(true);
      setUsername(username);
      setCurrentPage('home');
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setCurrentPage('home');
  };

  const handleRegister = (username: string, password: string) => {
    // Here you would typically make an API call to register the user
    console.log('Registering:', username, password);
    setShowRegister(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile username={username} />;
      case 'reservations':
        return <MyReservations />;
      default:
        return (
          <div className="space-y-8">
            <ComplexSearch />
            <ReservationSearch />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={handleLogout}
        onNavigate={setCurrentPage}
      />
      <div className="container mx-auto py-8 px-4">
        {isLoggedIn ? (
          renderPage()
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4">
            {showRegister ? (
              <RegisterForm onRegister={handleRegister} />
            ) : (
              <>
                <LoginForm onLogin={handleLogin} />
                <button
                  onClick={() => setShowRegister(true)}
                  className="mt-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition duration-300"
                >
                  Register
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;