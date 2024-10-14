import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Reservation {
  id: string;
  complex: string;
  fieldType: string;
  date: string;
  time: string;
}

const MyReservations: React.FC = () => {
  // In a real application, you would fetch this data from your backend
  const reservations: Reservation[] = [
    { id: '1', complex: 'Green Fields Complex', fieldType: '5-a-side', date: '2023-06-15', time: '18:00' },
    { id: '2', complex: 'Soccer City', fieldType: '11-a-side', date: '2023-06-20', time: '19:30' },
  ];

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Reservations</h2>
      {reservations.length === 0 ? (
        <p>You have no reservations.</p>
      ) : (
        <ul className="space-y-4">
          {reservations.map((reservation) => (
            <li key={reservation.id} className="bg-green-100 p-4 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{reservation.complex}</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span>{reservation.date}</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>{reservation.time}</span>
              </div>
              <p className="text-sm text-gray-600">{reservation.fieldType} field</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;