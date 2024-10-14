import React, { useState } from 'react';
import { Search, Calendar } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface Complex {
  id: string;
  name: string;
  fields: {
    id: string;
    type: string;
    description: string;
    availability: string[];
  }[];
}

const ComplexSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [selectedComplex, setSelectedComplex] = useState<Complex | null>(null);
  const [confirmReservation, setConfirmReservation] = useState<{ fieldId: string; time: string } | null>(null);

  const handleSearch = () => {
    // Simulated search functionality
    const mockComplex: Complex = {
      id: '1',
      name: 'Green Fields Complex',
      fields: [
        {
          id: 'field1',
          type: '5-a-side',
          description: 'Indoor turf field',
          availability: ['18:00', '19:00', '20:00']
        },
        {
          id: 'field2',
          type: '11-a-side',
          description: 'Outdoor grass field',
          availability: ['17:00', '18:30', '20:00']
        }
      ]
    };
    setSelectedComplex(mockComplex);
  };

  const handleReservationClick = (fieldId: string, time: string) => {
    setConfirmReservation({ fieldId, time });
  };

  const handleConfirmReservation = () => {
    if (confirmReservation) {
      toast.success(`Field reserved for ${confirmReservation.time}!`);
      setConfirmReservation(null);
    }
  };

  return (
    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
      <Toaster />
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Soccer Complexes</h2>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="complex-search" className="block text-sm font-medium text-gray-700 mb-1">
            Complex Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              id="complex-search"
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search complexes..."
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
      {selectedComplex && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">{selectedComplex.name}</h3>
          {selectedComplex.fields.map((field) => (
            <div key={field.id} className="mb-4 p-4 bg-green-50 rounded-md">
              <h5 className="font-semibold">{field.type}</h5>
              <p className="text-sm text-gray-600 mb-2">{field.description}</p>
              <h6 className="font-semibold mb-1">Available Times:</h6>
              <div className="flex flex-wrap gap-2">
                {field.availability.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleReservationClick(field.id, time)}
                    className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {confirmReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Reservation</h3>
            <p>Are you sure you want to reserve this field for {confirmReservation.time}?</p>
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

export default ComplexSearch;