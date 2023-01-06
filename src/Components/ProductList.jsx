import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function addToCart(p) {
    dispatch({ type: "ADD_TO_CART", payload: p });
  }

  return (
    <div className="card text-dark">
      <img src={product.image} height={200} alt="" className="card-image-top" />
      <div className="card-body">
        <h3 className="card-title h6">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="card-footer">
        <div className="btn-group w-100">
          <button
            onClick={() => navigate(`/products/${product.id}`)}
            className="btn btn-info"
          >
            Read more
          </button>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-success"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row g-5">
      {products.map((product) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
          <ProductCard addToCart={addToCart} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
