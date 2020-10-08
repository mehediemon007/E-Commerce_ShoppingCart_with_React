import React, { useContext } from "react";
import { Link, link } from "react-router-dom";
import { CartContext } from "../Global/CartContext";

const Navbar = () => {
  const { qty } = useContext(CartContext);
  return (
    <nav>
      <div className="brand">
        <Link to="/E-Commerce_ShoppingCart_with_React/">Dress Up</Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <span className="shoppingCart">
              <i className="fas fa-cart-plus"></i>{" "}
              <span className="cartCount">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
