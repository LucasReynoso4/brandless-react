import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { currentUser } = useAuth()
  const { cart, clear } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    ciudad: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [orderError, setOrderError] = useState(null)

  if (cart.length === 0 && !orderId) {
    return <Navigate to="/" replace />
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.nombre.trim()) newErrors.nombre = 'Requerido'
    if (!form.apellido.trim()) newErrors.apellido = 'Requerido'
    if (!form.telefono.trim()) newErrors.telefono = 'Requerido'
    if (!form.direccion.trim()) newErrors.direccion = 'Requerido'
    if (!form.ciudad.trim()) newErrors.ciudad = 'Requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setOrderError(null)

    if (!currentUser) {
      setOrderError('Tenés que iniciar sesión para finalizar la compra.')
      return
    }
    if (cart.length === 0) {
      setOrderError('Tu carrito está vacío.')
      return
    }
    if (!validate()) return

    setLoading(true)

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const order = {
      userId: currentUser.uid,
      userEmail: currentUser.email,
      buyer: form,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      createdAt: serverTimestamp(),
    }

    try {
      const docRef = await addDoc(collection(db, 'orders'), order)
      setOrderId(docRef.id)
      clear()
    } catch (err) {
      setOrderError('No se pudo generar la orden. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra registrada!</h2>
        <p>Tu número de orden es:</p>
        <p className="order-id">{orderId}</p>
        <button onClick={() => navigate('/')}>Volver al catálogo</button>
      </div>
    )
  }

  return (
    <div className="checkout">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Nombre
          <input name="nombre" value={form.nombre} onChange={handleChange} />
          {errors.nombre && <span className="field-error">{errors.nombre}</span>}
        </label>
        <label>
          Apellido
          <input name="apellido" value={form.apellido} onChange={handleChange} />
          {errors.apellido && <span className="field-error">{errors.apellido}</span>}
        </label>
        <label>
          Teléfono
          <input name="telefono" value={form.telefono} onChange={handleChange} />
          {errors.telefono && <span className="field-error">{errors.telefono}</span>}
        </label>
        <label>
          Dirección
          <input name="direccion" value={form.direccion} onChange={handleChange} />
          {errors.direccion && <span className="field-error">{errors.direccion}</span>}
        </label>
        <label>
          Ciudad
          <input name="ciudad" value={form.ciudad} onChange={handleChange} />
          {errors.ciudad && <span className="field-error">{errors.ciudad}</span>}
        </label>
        {orderError && <p className="error-message">{orderError}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  )
}

export default Checkout