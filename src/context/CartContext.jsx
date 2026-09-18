import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === item.id)
      if (existe) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id))

  const clear = () => setCart([])

  const isInCart = (id) => cart.some((p) => p.id === id)

  const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}