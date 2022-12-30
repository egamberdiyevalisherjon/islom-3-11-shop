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
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Components/PrivateRoute";

axios.defaults.baseURL = "https://fakestoreapi.com";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.cart || "[]"));

  function clearCart() {
    setCart([]);
    localStorage.cart = "[]";
  }

  function addToCart(item) {
    let product = cart.find((i) => i.id === item.id);
    if (!product) {
      let a = [...cart, { ...item, count: 1 }];
      setCart(a);
      localStorage.cart = JSON.stringify(a);
    } else {
      let a = cart.filter((i) => i.id !== item.id);
      if (!a) return;
      a.push({ ...product, count: ++product.count });
      setCart(a);
      localStorage.cart = JSON.stringify(a);
    }
  }

  function removeFromCart(id) {
    let a = cart.filter((item) => item.id !== id);
    setCart(a);
    localStorage.cart = JSON.stringify(a);
  }

  function increaseCartItem(id) {
    let product = cart.find((i) => i.id === id);
    let a = cart.filter((i) => i.id !== id);
    if (!a) return;
    a.push({ ...product, count: ++product.count });
    setCart(a);
    localStorage.cart = JSON.stringify(a);
  }

  function decreaseCartItem(id) {
    let product = cart.find((i) => i.id === id);
    let a = cart.filter((i) => i.id !== id);
    if (!a) return;
    a.push({ ...product, count: --product.count });
    setCart(a);
    localStorage.cart = JSON.stringify(a);
  }

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute redirect="/login?afterPage=/payment">
              <Payment clearCart={clearCart} cart={cart} />
            </PrivateRoute>
          }
        />
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
