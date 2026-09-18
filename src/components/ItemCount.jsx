import { useState } from 'react'
import { Link } from 'react-router-dom'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)
  const [added, setAdded] = useState(false)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  const handleAdd = () => {
    onAdd(count)
    setAdded(true)
  }

  if (added) {
    return (
      <div className="item-count">
        <p>¡Agregado al carrito!</p>
        <Link to="/cart" className="go-to-cart-link">Terminar mi compra</Link>
      </div>
    )
  }

  return (
    <div className="item-count">
      <div className="item-count-selector">
        <button onClick={decrement} disabled={count <= 0}>-</button>
        <span>{count}</span>
        <button onClick={increment} disabled={count >= stock}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAdd} disabled={count <= 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount