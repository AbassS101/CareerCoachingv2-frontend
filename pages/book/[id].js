// pages/book/[id].js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

export default function BookingPage() {
  const [coach, setCoach] = useState(null)
  const [events, setEvents] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      fetchCoach()
      fetchAvailability()
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

  const fetchAvailability = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/coaches/${id}/availability`)
      setEvents(res.data.map(slot => ({
        start: new Date(slot.start),
        end: new Date(slot.end),
        title: 'Available'
      })))
    } catch (error) {
      console.error('Error fetching availability', error)
    }
  }

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo)
  }

  const handleBooking = async () => {
    if (!selectedSlot) return
    try {
      await axios.post(`http://localhost:5000/api/bookings`, {
        coachId: id,
        start: selectedSlot.start,
        end: selectedSlot.end
      })
      alert('Booking successful!')
      router.push('/dashboard')
    } catch (error) {
      console.error('Error booking session', error)
      alert('Failed to book session. Please try again.')
    }
  }

  if (!coach) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Book a Session with {coach.name}</h1>
      <div className="mb-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </div>
      {selectedSlot && (
        <div className="mb-4">
          <p>Selected Slot: {moment(selectedSlot.start).format('MMMM Do YYYY, h:mm a')} - {moment(selectedSlot.end).format('h:mm a')}</p>
          <button 
            onClick={handleBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </Layout>
  )
}