import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

function Item({ product }) {
  const { id, name, price, img, description, stock } = product

  return (
    <Link to={`/item/${id}`} className="item-card-link">
      <div className="item-card">
        {stock < 5 && <span className="low-stock-badge">¡Últimas unidades!</span>}
        <img src={img} alt={name} className="item-card-img" />
        <h3>{name}</h3>
        <p className="item-card-description">{description}</p>
        <p className="item-card-price">{formatPrice(price)}</p>
      </div>
    </Link>
  )
}

export default Item