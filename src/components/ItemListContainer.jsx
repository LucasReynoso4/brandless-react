import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/getProducts'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProducts(categoryId)
      .then((products) => setItems(products))
      .catch(() => setError('No se pudieron cargar los productos.'))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h1>{greeting || `Categoría: ${categoryId}`}</h1>
      {loading && <p>Cargando productos...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && <ItemList products={items} />}
    </div>
  )
}

export default ItemListContainer