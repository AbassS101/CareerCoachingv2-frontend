// pages/admin/dashboard.js
import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import withAuth from '../../components/withAuth'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCoaches: 0,
    totalBookings: 0,
    totalRevenue: 0
  })
  const [recentBookings, setRecentBookings] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    fetchStats()
    fetchRecentBookings()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/stats')
      setStats(res.data)
    } catch (error) {
      console.error('Error fetching stats', error)
    }
  }

  const fetchRecentBookings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/recent-bookings')
      setRecentBookings(res.data)
    } catch (error) {
      console.error('Error fetching recent bookings', error)
    }
  }

  if (user.role !== 'admin') {
    return <div>Access Denied</div>
  }

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-xl mb-2">Total Users</h2>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-xl mb-2">Total Coaches</h2>
          <p className="text-3xl font-bold">{stats.totalCoaches}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h2 className="text-xl mb-2">Total Bookings</h2>
          <p className="text-3xl font-bold">{stats.totalBookings}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded">
          <h2 className="text-xl mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">${stats.totalRevenue}</p>
        </div>
      </div>
      <h2 className="text-xl mb-4">Recent Bookings</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Client</th>
            <th className="text-left">Coach</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {recentBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.clientName}</td>
              <td>{booking.coachName}</td>
              <td>{new Date(booking.start).toLocaleString()}</td>
              <td>${booking.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default withAuth(AdminDashboard)