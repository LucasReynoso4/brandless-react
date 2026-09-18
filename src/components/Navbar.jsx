import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import './Navbar.css'

const categories = [
  { label: 'Remeras', slug: 'remeras' },
  { label: 'Pantalones', slug: 'pantalones' },
  { label: 'Camperas', slug: 'camperas' },
  { label: 'Accesorios', slug: 'accesorios' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">Brandless</NavLink>
      <ul className="navbar-categories">
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/category/${category.slug}`}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  )
}

export default Navbar