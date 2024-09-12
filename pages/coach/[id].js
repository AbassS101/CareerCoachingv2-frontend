// pages/coach/[id].js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import CoachReviews from '../../components/CoachReviews'
import axios from 'axios'

export default function CoachProfile() {
  const [coach, setCoach] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetchCoach()
    }
  }, [id])

  const fetchCoach = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/coaches/${id}`)
      setCoach(res.data)
    } catch (error) {
      console.error('Error fetching coach', error)
    }
  }

  if (!coach) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className="text-2xl mb-4">{coach.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={coach.profilePicture} alt={coach.name} className="w-full rounded" />
          <h2 className="text-xl mt-4 mb-2">Expertise</h2>
          <p>{coach.expertise}</p>
          <h2 className="text-xl mt-4 mb-2">Bio</h2>
          <p>{coach.bio}</p>
          <h2 className="text-xl mt-4 mb-2">Hourly Rate</h2>
          <p>${coach.hourlyRate}/hour</p>
          <button 
            onClick={() => router.push(`/book/${coach._id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Book a Session
          </button>
        </div>
        <div>
          <CoachReviews coachId={coach._id} />
        </div>
      </div>
    </Layout>
  )
}