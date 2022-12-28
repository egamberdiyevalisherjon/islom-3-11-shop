import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import Todo from "./Pages/Todo";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import { useState } from "react";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";

axios.defaults.baseURL = "https://fakestoreapi.com";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let product = cart.find((i) => i.id === item.id);
    if (!product) {
      setCart([...cart, { ...item, count: 1 }]);
    } else {
      let a = cart.filter((i) => i.id !== item.id);
      if (!a) return;
      a.push({ ...product, count: ++product.count });
      setCart(a);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function increaseCartItem(id) {
    let product = cart.find((i) => i.id === id);
    let a = cart.filter((i) => i.id !== id);
    if (!a) return;
    a.push({ ...product, count: ++product.count });
    setCart(a);
  }

  function decreaseCartItem(id) {
    let product = cart.find((i) => i.id === id);
    let a = cart.filter((i) => i.id !== id);
    if (!a) return;
    a.push({ ...product, count: --product.count });
    setCart(a);
  }

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/payment" element={<Payment cart={cart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseCartItem={increaseCartItem}
              decreaseCartItem={decreaseCartItem}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="*" element={<Navigate to="/todo" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
