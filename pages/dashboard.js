// pages/dashboard.js
import withAuth from '../components/withAuth'
import Layout from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Welcome, {user.email}!</p>
      <p>Your role is: {user.role}</p>
      <button 
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </Layout>
  )
}

export default withAuth(Dashboard)