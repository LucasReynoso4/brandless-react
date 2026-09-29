import Item from './Item'

function ItemList({ products }) {
  if (products.length === 0) {
    return <p className="empty-message">No hay productos en esta categoría.</p>
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList