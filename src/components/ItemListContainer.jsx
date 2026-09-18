import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchProducts = async () => {
      const products = await getProducts()
      const filtered = categoryId
        ? products.filter(
            (product) => product.category.toLowerCase() === categoryId.toLowerCase()
          )
        : products
      setItems(filtered)
      setLoading(false)
    }

    fetchProducts()
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h1>{greeting || `Categoría: ${categoryId}`}</h1>
      {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
    </div>
  )
}

export default ItemListContainer