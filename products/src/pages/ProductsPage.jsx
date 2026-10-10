import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <section className="products-section">
      <h2>Featured Products</h2>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;