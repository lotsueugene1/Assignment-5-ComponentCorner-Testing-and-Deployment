import './ProductCard.css';

function ProductCard({
  name,
  price,
  image = 'https://placehold.co/600x400',
  description, addToCart
}) {

  return (

    <div className="product-card">

      <div className="product-header">
        <img 
          src={image}
          alt={`${name} product`}
          className="avatar"
        />

        <div className="product-info">
          <h3 className="productName">{name}</h3>
        <p className="product-description">{description} </p>
          <span className="price">{price}</span>
        </div>

        <div className="cart-actions">
            <button className="action-btn" onClick={addToCart}>Add to Cart </button>
        </div>
      </div>

    </div>
  );
}


export default ProductCard;
