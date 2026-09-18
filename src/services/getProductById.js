import { products } from '../mock/asyncMock'

export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = products.find((p) => p.id === productId)
      producto ? resolve(producto) : reject(new Error('Producto no encontrado'))
    }, 500)
  })
}