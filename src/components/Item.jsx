import { Link } from 'react-router-dom'

function Item({ product }) {
  const { id, name, price, img, description } = product

  return (
    <Link to={`/item/${id}`} className="item-card-link">
      <div className="item-card">
        <img src={img} alt={name} className="item-card-img" />
        <h3>{name}</h3>
        <p className="item-card-description">{description}</p>
        <p className="item-card-price">${price}</p>
      </div>
    </Link>
  )
}

export default Item