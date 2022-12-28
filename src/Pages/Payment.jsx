import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((p, c) => p + c.price * c.count, 0);

  useEffect(() => {
    if (!total) navigate("/shop");
  }, []);

  return (
    <section className="py-5">
      <h2 className="display-3 text-center">Payment for ${total}</h2>
      <div className="container text-center mt-3">
        <div className="btn-group">
          <button className="btn btn-primary">
            <i className="fa-brands fa-paypal"></i> PayPal
          </button>
          <button className="btn btn-success">
            <i className="fa-2x fa-brands fa-cc-visa"></i>
          </button>
          <button className="btn btn-warning">
            <i className="fa-2x fa-brands fa-amazon-pay"></i>
          </button>
          <button className="btn btn-light">
            <i className="fa-2x fa-brands fa-apple-pay"></i>
          </button>
          <button className="btn btn-info">
            <i className="fa-brands fa-alipay"></i> AliPay
          </button>
          <button className="btn btn-primary">
            <i className="fa-2x fa-brands fa-google-pay"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
