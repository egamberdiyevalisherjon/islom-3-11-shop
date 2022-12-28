import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

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
