import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Loader from './Loader'

function ProtectedRoute({ children }) {
  const { currentUser, loadingAuth } = useAuth()

  if (loadingAuth) return <Loader />
  if (!currentUser) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute