function CartItem({ name, price, removeFromCart }) {
    return (
        <div className="item-card">
            <div className="item-info">
                <h3 className="itemName">{name}</h3>
                <span className="price">${price}</span>
            </div>

            <div className="cartItem-actions">
                <button className="cartItem-btn" onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;