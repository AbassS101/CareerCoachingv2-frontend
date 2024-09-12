// pages/search.js
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import Link from 'next/link'

export default function Search() {
  const [coaches, setCoaches] = useState([])
  const [filters, setFilters] = useState({
    expertise: '',
    priceRange: '',
    availability: ''
  })

  useEffect(() => {
    fetchCoaches()
  }, [filters])

  const fetchCoaches = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/coaches', { params: filters })
      setCoaches(res.data)
    } catch (error) {
      console.error('Error fetching coaches', error)
    }
  }

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Find a Coach</h1>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          name="expertise"
          placeholder="Expertise"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <select
          name="priceRange"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Price Range</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101+">$101+</option>
        </select>
        <input
          type="date"
          name="availability"
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coaches.map((coach) => (
          <div key={coach._id} className="border p-4 rounded">
            <h2 className="text-xl">{coach.name}</h2>
            <p>{coach.expertise}</p>
            <p>${coach.hourlyRate}/hour</p>
            <Link href={`/coach/${coach._id}`}>
              <a className="text-blue-500">View Profile</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}