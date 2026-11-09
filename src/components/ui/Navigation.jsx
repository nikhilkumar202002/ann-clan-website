const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Work', href: '#our-work' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = ({ className = '', mobile = false, onItemClick }) => {
  return (
    <nav className={className}>
      <ul
        className={
          mobile
            ? 'flex flex-col space-y-4 text-base font-medium text-gray-700'
            : 'flex items-center space-x-8 text-sm font-medium text-gray-700'
        }
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={onItemClick}
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
