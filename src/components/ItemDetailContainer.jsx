import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'
import Loader from './Loader'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setProducto(null)
    setError(null)

    getProductById(id)
      .then((p) => setProducto(p))
      .catch(() => setError('Producto no encontrado.'))
  }, [id])

  if (error) return <p className="error-message">{error}</p>
  if (!producto) return <Loader text="Cargando producto..." />

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer