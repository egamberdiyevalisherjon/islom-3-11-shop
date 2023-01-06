import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import Todo from "./Pages/Todo";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Components/PrivateRoute";

axios.defaults.baseURL = "https://fakestoreapi.com";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute redirect="/login?afterPage=/payment">
              <Payment />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/todo" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
