import React, { useState } from 'react';
import { Search, Calendar, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface SearchResult {
  id: string;
  complex: string;
  fieldType: string;
  date: string;
  availableTimes: string[];
}

const ReservationSearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [confirmReservation, setConfirmReservation] = useState<{ complex: string; fieldType: string; date: string; time: string } | null>(null);

  const handleSearch = () => {
    // Simulated search functionality
    const mockResults: SearchResult[] = [
      {
        id: '1',
        complex: 'Green Fields Complex',
        fieldType: '5-a-side',
        date: '2023-06-15',
        availableTimes: ['18:00', '19:00', '20:00']
      },
      {
        id: '2',
        complex: 'Soccer City',
        fieldType: '11-a-side',
        date: '2023-06-15',
        availableTimes: ['17:00', '18:30', '20:00']
      }
    ];
    setResults(mockResults);
  };

  const handleReservationClick = (complex: string, fieldType: string, date: string, time: string) => {
    setConfirmReservation({ complex, fieldType, date, time });
  };

  const handleConfirmReservation = () => {
    if (confirmReservation) {
      toast.success(`Reserved ${confirmReservation.fieldType} field at ${confirmReservation.complex} for ${confirmReservation.date} at ${confirmReservation.time}`);
      setConfirmReservation(null);
    }
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
      <Toaster />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Available Fields</h2>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="location-search" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              id="location-search"
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location..."
            />
          </div>
        </div>
        <div>
          <label htmlFor="date-search" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Calendar className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="date"
              id="date-search"
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Search
      </button>
      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Available Reservations:</h3>
          <ul className="space-y-4">
            {results.map((result) => (
              <li key={result.id} className="bg-green-100 p-4 rounded">
                <p className="font-semibold">{result.complex} - {result.fieldType}</p>
                <p className="text-sm text-gray-600 mb-2">{result.date}</p>
                <h6 className="font-semibold mb-1">Available Times:</h6>
                <div className="flex flex-wrap gap-2">
                  {result.availableTimes.map((availableTime) => (
                    <button
                      key={availableTime}
                      onClick={() => handleReservationClick(result.complex, result.fieldType, result.date, availableTime)}
                      className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      {availableTime}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {confirmReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Reservation</h3>
            <p>Are you sure you want to reserve the {confirmReservation.fieldType} field at {confirmReservation.complex} for {confirmReservation.date} at {confirmReservation.time}?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setConfirmReservation(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReservation}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationSearch;