import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
  const { currentUser, loadingAuth } = useAuth()

  if (loadingAuth) return <p>Cargando...</p>
  if (!currentUser) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute