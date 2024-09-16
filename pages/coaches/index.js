// pages/coaches/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expertise, setExpertise] = useState('');
  const [minRate, setMinRate] = useState('');
  const [maxRate, setMaxRate] = useState('');

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const { data } = await axios.get('/api/coaches');
        setCoaches(data);
        setFilteredCoaches(data);
      } catch (error) {
        console.error('Error fetching coaches:', error);
      }
    };

    fetchCoaches();
  }, []);

  useEffect(() => {
    const results = coaches.filter(coach => 
      coach.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (expertise === '' || coach.expertise.toLowerCase().includes(expertise.toLowerCase())) &&
      (minRate === '' || coach.hourlyRate >= parseInt(minRate)) &&
      (maxRate === '' || coach.hourlyRate <= parseInt(maxRate))
    );
    setFilteredCoaches(results);
  }, [searchTerm, expertise, minRate, maxRate, coaches]);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Find a Coach</h1>
      
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Filter by expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Min hourly rate"
          value={minRate}
          onChange={(e) => setMinRate(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          placeholder="Max hourly rate"
          value={maxRate}
          onChange={(e) => setMaxRate(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCoaches.map(coach => (
          <div key={coach._id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{coach.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{coach.expertise}</p>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">${coach.hourlyRate}/hour</p>
              <p className="mt-3 text-sm text-gray-500">{coach.bio}</p>
            </div>
            <div className="px-4 py-4 sm:px-6">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book a Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}