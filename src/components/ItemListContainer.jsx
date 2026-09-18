import { useState, useEffect } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setItems(products)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
    </div>
  )
}

export default ItemListContainer