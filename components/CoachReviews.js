// components/CoachReviews.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

export default function CoachReviews({ coachId }) {
  const [reviews, setReviews] = useState([])
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' })
  const { user } = useAuth()

  useEffect(() => {
    fetchReviews()
  }, [coachId])

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/coaches/${coachId}/reviews`)
      setReviews(res.data)
    } catch (error) {
      console.error('Error fetching reviews', error)
    }
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:5000/api/coaches/${coachId}/reviews`, newReview)
      setNewReview({ rating: 5, comment: '' })
      fetchReviews()
    } catch (error) {
      console.error('Error submitting review', error)
    }
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} className="mb-4 p-4 border rounded">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">{'★'.repeat(review.rating)}</span>
            <span className="text-gray-500">{review.userName}</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
      {user && user.role === 'client' && (
        <form onSubmit={handleSubmitReview} className="mt-4">
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="mb-2 p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            placeholder="Write your review..."
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}