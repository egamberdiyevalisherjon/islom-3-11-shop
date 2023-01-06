import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import { useDispatch } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  function addToCart(p) {
    dispatch({ type: "ADD_TO_CART", payload: p });
  }

  useEffect(() => {
    let unmounted = false;
    async function getProducts() {
      let { data } = await axios.get("/products");

      if (!unmounted) setProducts(data);
    }

    getProducts();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <section className="py-5">
      <h2 className="display-4 text-center mb-5">Shop</h2>
      <div className="container">
        <ProductList addToCart={addToCart} products={products} />
      </div>
    </section>
  );
};

export default Shop;
