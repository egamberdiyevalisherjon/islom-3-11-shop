import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";

const Payment = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((p, c) => p + c.price * c.count, 0);

  const dispatch = useDispatch();

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  useEffect(() => {
    if (!total) navigate("/shop");
  }, [total]);

  function handlePayment(e) {
    let r = Math.floor(Math.random() * 5) + 1;
    alert(
      `Tolov qabul qilindi. Buyurtma ${r} ish kun ichida yetkalizil beriladi. Ishonchingiz uchun rahmat.`
    );
    clearCart();
  }

  return (
    <section className="py-5">
      <h2 className="display-3 text-center">Payment for ${total}</h2>
      <div className="container text-center mt-3">
        <div className="btn-group">
          <button onClick={handlePayment} className="btn btn-primary">
            <i className="fa-brands fa-paypal"></i> PayPal
          </button>
          <button onClick={handlePayment} className="btn btn-success">
            <i className="fa-2x fa-brands fa-cc-visa"></i>
          </button>
          <button onClick={handlePayment} className="btn btn-warning">
            <i className="fa-2x fa-brands fa-amazon-pay"></i>
          </button>
          <button onClick={handlePayment} className="btn btn-light">
            <i className="fa-2x fa-brands fa-apple-pay"></i>
          </button>
          <button onClick={handlePayment} className="btn btn-info">
            <i className="fa-brands fa-alipay"></i> AliPay
          </button>
          <button onClick={handlePayment} className="btn btn-primary">
            <i className="fa-2x fa-brands fa-google-pay"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

// const mapStateToProp = (state) => {
//   return { cart: state.cart };
// };

// const mapDispatchToProp = (dispatch) => {
//   return {
//     clearCart: function () {
//       dispatch({ type: "CLEAR_CART" });
//     },
//   };
// };

// export default connect(mapStateToProp, mapDispatchToProp)(Payment);

export default Payment;
