import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {totalItems > 0 && <b>{totalItems}</b>}
    </Link>
  )
}

export default CartWidget