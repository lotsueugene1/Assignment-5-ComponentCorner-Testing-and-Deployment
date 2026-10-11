import './Hero.css';
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">

        <h2 id="hero-title">
          Find the right product for you
        </h2>

        <p className="hero-description">
          Explore quality products, compare features, and find something
          that fits your needs.
        </p>
        <Link to="/products" className="hero-button">Browse Products</Link>
      </div>
    </section>
  );
}

export default Hero;