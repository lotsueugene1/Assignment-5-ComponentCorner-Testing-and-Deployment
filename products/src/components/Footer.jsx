
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-brand">
        <p className="footer-logo">PhoneCorner</p>
        <p className="footer-tagline">Products selected with quality in mind.</p>
      </div>

      <address className="footer-contact">
        <a href="mailto:lotsueugeen@gmail.com">lotsueugen@gmail.com</a>
        <a href="tel:+15511232344">(551) 123-2344</a>
        <span>123 Eugene St, 12345</span>
      </address>

      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
