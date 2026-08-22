import CartWidget from './CartWidget'
import './Navbar.css'

const categories = ['Remeras', 'Pantalones', 'Buzos', 'Accesorios']

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Brandless</div>
      <ul className="navbar-categories">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar