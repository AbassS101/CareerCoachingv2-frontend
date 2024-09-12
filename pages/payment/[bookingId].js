// pages/payment/[bookingId].js
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('your_stripe_publishable_key')

const CheckoutForm = ({ booking }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    if (!stripe || !elements) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      setError(error.message)
      setProcessing(false)
      return
    }

    try {
      const { data } = await axios.post(`http://localhost:5000/api/payments`, {
        paymentMethodId: paymentMethod.id,
        bookingId: booking._id,
      })

      if (data.success) {
        alert('Payment successful!')
        router.push('/dashboard')
      } else {
        setError('Payment failed. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }

    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <button 
        type="submit" 
        disabled={!stripe || processing}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        {processing ? 'Processing...' : `Pay $${booking.amount}`}
      </button>
    </form>
  )
}

export default function PaymentPage() {
  const [booking, setBooking] = useState(null)
  const router = useRouter()
  const { bookingId } = router.query

  useEffect(() => {
    if (bookingId) {
      fetchBooking()
    }
  }, [bookingId])

  const fetchBooking = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bookings/${bookingId}`)
      setBooking(res.data)
    } catch (error) {
      console.error('Error fetching booking', error)
    }
  }

  if (!booking) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Complete Your Payment</h1>
      <div className="mb-4">
        <p>Booking with: {booking.coachName}</p>
        <p>Date: {new Date(booking.start).toLocaleString()}</p>
        <p>Amount: ${booking.amount}</p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </Layout>
  )
}