import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeItem, clear } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver al catálogo</Link>
      </div>
    )
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>Tu carrito</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-name">{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio unitario: ${item.price}</span>
            <span>Subtotal: ${item.price * item.quantity}</span>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${total}</p>
      <div className="cart-actions">
        <button onClick={clear}>Vaciar carrito</button>
        <button disabled>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Cart