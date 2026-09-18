export const products = [
  {
    id: 1,
    name: 'Remera Oversize',
    price: 15000,
    category: 'Remeras',
    img: 'https://placehold.co/300x300?text=Remera+Oversize',
    stock: 20,
    description: 'Remera oversize de algodón 100%, corte relajado.',
  },
  {
    id: 2,
    name: 'Pantalón Cargo',
    price: 28000,
    category: 'Pantalones',
    img: 'https://placehold.co/300x300?text=Pantalon+Cargo',
    stock: 15,
    description: 'Pantalón cargo con bolsillos laterales, tela resistente.',
  },
  {
    id: 3,
    name: 'Campera de Jean',
    price: 42000,
    category: 'Camperas',
    img: 'https://placehold.co/300x300?text=Campera+Jean',
    stock: 8,
    description: 'Campera de jean clásica, ideal para entretiempo.',
  },
  {
    id: 4,
    name: 'Gorra Brandless',
    price: 9000,
    category: 'Accesorios',
    img: 'https://placehold.co/300x300?text=Gorra',
    stock: 30,
    description: 'Gorra de algodón con logo bordado.',
  },
  {
    id: 5,
    name: 'Buzo Canguro',
    price: 32000,
    category: 'Remeras',
    img: 'https://placehold.co/300x300?text=Buzo+Canguro',
    stock: 12,
    description: 'Buzo canguro con capucha, friza interior.',
  },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}