// components/ProfileForm.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// ProfileForm.js
export const ProfileForm = () => {
    // component code here
  };  const [profile, setProfile] = useState({
    name: '',
    email: '',
    role: '',
    expertise: '',
    hourlyRate: '',
    bio: ''
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.put('/api/profile', profile, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={profile.email}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
        />
      </div>
      {profile.role === 'coach' && (
        <>
          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Expertise</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={profile.expertise || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">Hourly Rate ($)</label>
            <input
              type="number"
              id="hourlyRate"
              name="hourlyRate"
              value={profile.hourlyRate || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio || ''}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Profile
      </button>
    </form>
  );
}