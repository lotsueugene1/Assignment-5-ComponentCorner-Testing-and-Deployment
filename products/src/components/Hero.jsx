import './Hero.css';

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

        <a href="#products" className="hero-button">
          Browse Products
        </a>
      </div>
    </section>
  );
}

export default Hero;