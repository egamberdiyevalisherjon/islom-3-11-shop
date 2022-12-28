import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeFromCart, decreaseCartItem, increaseCartItem }) => {
  const navigate = useNavigate();
  return (
    <section id="cart">
      <h2 className="text-center">Cart</h2>
      <div className="container">
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex align-items-center gap-3"
            >
              <img src={item.image} alt={item.title} />
              <div className="d-flex gap-3">
                <span>{item.title}</span>
                <span className="vr"></span>
                <span> ${item.price}</span>
                <span className="vr"></span>
                <span> x {item.count}</span>
                <span className="vr"></span>
                <span> ${item.count * item.price}</span>
              </div>
              <div className="btn-group ms-auto">
                <button
                  className="btn btn-secondary"
                  onClick={() => decreaseCartItem(item.id)}
                >
                  -
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => increaseCartItem(item.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="d-flex mt-5 align-items-center justify-content-between">
          <h3>Total: ${cart.reduce((p, c) => p + c.price * c.count, 0)}</h3>
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/shop")}
            >
              Back to SHOPPING
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="btn btn-success"
              disabled={!cart.length}
            >
              Proceed to PAYMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
