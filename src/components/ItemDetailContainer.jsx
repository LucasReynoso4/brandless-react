import { useEffect, useState } from 'react'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ productId = 1 }) {
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    getProductById(productId)
      .then((p) => setProducto(p))
      .catch((e) => console.error(e))
  }, [productId])

  if (!producto) return <p>Cargando...</p>

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer