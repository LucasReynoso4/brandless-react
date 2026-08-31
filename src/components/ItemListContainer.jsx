import { useState, useEffect } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setItems(products)
    }

    fetchProducts()
  }, [])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={items} />
    </div>
  )
}

export default ItemListContainer