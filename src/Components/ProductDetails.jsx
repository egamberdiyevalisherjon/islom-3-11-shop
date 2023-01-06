import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  const addToCart = (p) => {
    dispatch({ type: "ADD_TO_CART", payload: p });
  };

  useEffect(() => {
    let unmounted = false;
    async function getProduct() {
      let { data } = await axios.get(`/products/${id}`);

      if (!unmounted) setProduct(data);
    }

    getProduct();

    return () => {
      unmounted = true;
    };
  }, []);

  return !product ? (
    <div className="text-center">
      <div className="spinner-border text-info" />
    </div>
  ) : (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img src={product.image} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <div>
              Rating: {product.rating.rate}/{product.rating.count}{" "}
              <Rating rating={product.rating.rate} />
            </div>
            <button
              onClick={() => addToCart(product)}
              className="btn btn-success mt-5 d-block w-100"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

function Rating({ rating }) {
  return (
    <div className="d-flex gap-1 text-warning">
      {rating < 0.4 ? (
        <i className="fa-regular fa-star"></i>
      ) : rating < 0.8 ? (
        <i className="fa-regular fa-star-half-stroke"></i>
      ) : (
        <i className="fa-solid fa-star"></i>
      )}
      {rating < 1.4 ? (
        <i className="fa-regular fa-star"></i>
      ) : rating < 1.8 ? (
        <i className="fa-regular fa-star-half-stroke"></i>
      ) : (
        <i className="fa-solid fa-star"></i>
      )}
      {rating < 2.4 ? (
        <i className="fa-regular fa-star"></i>
      ) : rating < 2.8 ? (
        <i className="fa-regular fa-star-half-stroke"></i>
      ) : (
        <i className="fa-solid fa-star"></i>
      )}
      {rating < 3.4 ? (
        <i className="fa-regular fa-star"></i>
      ) : rating < 3.8 ? (
        <i className="fa-regular fa-star-half-stroke"></i>
      ) : (
        <i className="fa-solid fa-star"></i>
      )}
      {rating < 4.4 ? (
        <i className="fa-regular fa-star"></i>
      ) : rating < 4.8 ? (
        <i className="fa-regular fa-star-half-stroke"></i>
      ) : (
        <i className="fa-solid fa-star"></i>
      )}
    </div>
  );
}

export default ProductDetails;
