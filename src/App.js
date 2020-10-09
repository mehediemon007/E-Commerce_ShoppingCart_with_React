import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsContextProvider from "./Global/ProductsContext";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route,HashRouter } from "react-router-dom";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <HashRouter basename="/">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Product} />
              <Route path="/cart" exact component={Cart} />
              <Route component={NotFound} />
            </Switch>
          </HashRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
