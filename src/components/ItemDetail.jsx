import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {
  const { name, price, category, description, stock, img } = producto
  const { addItem } = useCart()
  const navigate = useNavigate()

  const handleAdd = (quantity) => {
    addItem(producto, quantity)
  }

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>
      <div className="item-detail">
        <img src={img} alt={name} className="item-detail-img" />
        <div className="item-detail-info">
          <h2>{name}</h2>
          <p className="item-detail-category">{category}</p>
          <p className="item-detail-description">{description}</p>
          <p className="item-detail-price">{formatPrice(price)}</p>
          <p className="item-detail-stock">Stock disponible: {stock}</p>
          {stock < 5 && <p className="low-stock-text">¡Últimas unidades!</p>}
          <ItemCount stock={stock} onAdd={handleAdd} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail