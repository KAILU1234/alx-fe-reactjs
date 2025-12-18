import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333' }}>
      <Link style={{ color: 'white', marginRight: '10px' }} to="/">Home</Link>
      <Link style={{ color: 'white', marginRight: '10px' }} to="/about">About</Link>
      <Link style={{ color: 'white', marginRight: '10px' }} to="/services">Services</Link>
      <Link style={{ color: 'white' }} to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
