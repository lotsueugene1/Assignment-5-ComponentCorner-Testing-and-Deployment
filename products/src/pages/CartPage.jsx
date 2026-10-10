import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
  const totalCart = products.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <aside className="cart-panel">
      <h2>Your Cart</h2>

      {products.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {products.map((product, index) => (
            <CartItem
              key={`${product.id}-${index}`}
              name={product.name}
              price={product.price}
              removeFromCart={() => removeFromCart(index)}
            />
          ))}

          <p>Total: ${totalCart.toFixed(2)}</p>
        </>
      )}
    </aside>
  );
}

export default CartPage;