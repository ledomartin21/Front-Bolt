import React from 'react';
import { Activity, Calendar, User, LogOut } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  username: string;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, username, onLogout, onNavigate }) => {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <Activity className="h-8 w-8" />
          <span className="text-xl font-bold">Soccer Field Reservations</span>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button onClick={() => onNavigate('reservations')} className="flex items-center space-x-1 hover:text-green-200">
                <Calendar className="h-5 w-5" />
                <span>My Reservations</span>
              </button>
              <button onClick={() => onNavigate('profile')} className="flex items-center space-x-1 hover:text-green-200">
                <User className="h-5 w-5" />
                <span>{username}</span>
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-1 hover:text-green-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <span>Welcome, Guest!</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;