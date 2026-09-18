import { useState } from 'react'

function ItemCount({ stock, initial = 1 }) {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <div className="item-count">
      <button onClick={decrement} disabled={count <= 0}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={count >= stock}>+</button>
    </div>
  )
}

export default ItemCount