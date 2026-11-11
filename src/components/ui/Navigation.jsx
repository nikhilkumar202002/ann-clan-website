import { NavLink } from 'react-router-dom'
import { navRoutes } from '../../routes/navRoutes'

const Navigation = ({ className = '', mobile = false, onItemClick }) => {
  return (
    <nav className={className}>
      <ul
        className={
          mobile
            ? 'flex flex-col space-y-4 text-base font-bold uppercase tracking-wider text-gray-700'
            : 'flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-gray-700'
        }
      >
        {navRoutes.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={onItemClick}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'text-black font-extrabold'
                    : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
