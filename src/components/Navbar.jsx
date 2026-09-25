import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const categories = [
  { label: 'Remeras', slug: 'remeras' },
  { label: 'Pantalones', slug: 'pantalones' },
  { label: 'Camperas', slug: 'camperas' },
  { label: 'Accesorios', slug: 'accesorios' },
]

function Navbar() {
  const { currentUser, logout } = useAuth()

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
      <div className="navbar-auth">
        {currentUser ? (
          <>
            <span className="navbar-user">{currentUser.email}</span>
            <button onClick={logout} className="logout-btn">Cerrar sesión</button>
          </>
        ) : (
          <NavLink to="/login">Ingresar</NavLink>
        )}
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar