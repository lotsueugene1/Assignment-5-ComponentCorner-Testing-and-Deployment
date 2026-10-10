import './Header.css';
import { Link } from "react-router-dom";


function Header({ cartCount }) {
  return (
    <header className="app-header">
        <h1 className="logo">PhoneCorner</h1>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="cart-container"> 
           <Link to="/cart" className="cart-icon">🛒</Link>
          <span>{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
