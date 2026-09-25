import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setProducto(null)
    setError(null)

    getProductById(id)
      .then((p) => setProducto(p))
      .catch(() => setError('No se pudo cargar el producto.'))
  }, [id])

  if (error) return <p className="error-message">{error}</p>
  if (!producto) return <p>Cargando...</p>

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer