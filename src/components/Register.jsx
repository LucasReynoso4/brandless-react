import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await register(email, password)
      navigate('/')
    } catch (err) {
      setError('No se pudo crear la cuenta. Verificá el email y que la contraseña tenga al menos 6 caracteres.')
    }
  }

  return (
    <div className="auth-form">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Registrarme</button>
      </form>
      <p>¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
    </div>
  )
}

export default Register