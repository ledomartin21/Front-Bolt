import React from 'react';
import { User, Mail, Phone, Calendar } from 'lucide-react';

interface ProfileProps {
  username: string;
}

const Profile: React.FC<ProfileProps> = ({ username }) => {
  // In a real application, you would fetch this data from your backend
  const userProfile = {
    username: username,
    email: 'user@example.com',
    phone: '+1 234 567 8900',
    joinDate: '2023-01-01',
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Profile</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-green-600" />
          <span className="font-semibold">Username:</span>
          <span>{userProfile.username}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-green-600" />
          <span className="font-semibold">Email:</span>
          <span>{userProfile.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-green-600" />
          <span className="font-semibold">Phone:</span>
          <span>{userProfile.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-green-600" />
          <span className="font-semibold">Join Date:</span>
          <span>{userProfile.joinDate}</span>
        </div>
      </div>
      <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;