import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
import StripeCheckOut from "react-stripe-checkout";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const handleToken = (token)=>{
           console.log(token)
  }
  return (
    <div className="cart-container">
      <div className="cart-details" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not fount" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">{cart.price}</span>
                <span
                  className="inc"
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </span>
                <span className="product-quantity">{cart.quantity}</span>
                <span
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span className="product-total-price">
                  ${cart.price * cart.quantity}.00
                </span>
                <span
                  className="delete-product"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.id, cart })
                  }
                >
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : "Your cart is Empty"}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="cart-summary">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
              <div className="items">Total Item(s)</div>
              <div className="items-count">{qty}</div>
            </div>
            <div className="total-prices">
              <div className="prices">Total Price(s)</div>
              <div className="items-prices">${totalPrice}.00</div>
            </div>
            <div className="stripe-section">
              <StripeCheckOut
              stripeKey="pk_test_51Ha4BhC1LupU3GFSQ2zHNWyl3c9KeqCW2lzmkCfU9H6Z5VPot7Hmtq1ul8UEUd96vDnBLdmrJuADY2JCOVDBRF2J00DyOBdBeI"
              token={handleToken}
              billingAddress
              shippingAddress
              amount={totalPrice*100}
              name="ALl Products"
              ></StripeCheckOut>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
