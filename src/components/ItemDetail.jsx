import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {
  const { name, price, category, description, stock, img } = producto
  const { addItem } = useCart()

  const handleAdd = (quantity) => {
    addItem(producto, quantity)
  }

  return (
    <div className="item-detail">
      <img src={img} alt={name} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{name}</h2>
        <p className="item-detail-category">{category}</p>
        <p className="item-detail-description">{description}</p>
        <p className="item-detail-price">${price}</p>
        <p className="item-detail-stock">Stock disponible: {stock}</p>
        <ItemCount stock={stock} onAdd={handleAdd} />
      </div>
    </div>
  )
}

export default ItemDetail