function Item({ product }) {
  const { name, price, img, description } = product

  return (
    <div className="item-card">
      <img src={img} alt={name} className="item-card-img" />
      <h3>{name}</h3>
      <p className="item-card-description">{description}</p>
      <p className="item-card-price">${price}</p>
    </div>
  )
}

export default Item