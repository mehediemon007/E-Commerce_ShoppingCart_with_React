import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Product} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
