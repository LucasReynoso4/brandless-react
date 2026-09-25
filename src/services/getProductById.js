import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export const getProductById = async (productId) => {
  const productRef = doc(db, 'products', productId)
  const snapshot = await getDoc(productRef)

  if (!snapshot.exists()) {
    throw new Error('Producto no encontrado')
  }

  return { id: snapshot.id, ...snapshot.data() }
}