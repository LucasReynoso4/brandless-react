import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/getProductById'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    setProducto(null)
    getProductById(Number(id))
      .then((p) => setProducto(p))
      .catch((e) => console.error(e))
  }, [id])

  if (!producto) return <p>Cargando...</p>

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer