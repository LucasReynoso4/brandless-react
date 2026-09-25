import { db } from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, 'products')
  const q = categoryId
    ? query(productsRef, where('category', '==', capitalize(categoryId)))
    : productsRef

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}