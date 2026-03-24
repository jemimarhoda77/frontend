import React from "react";
import "./ProductsPage.css";
import ProductsSidebar from "./ProductsSIdebar";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductsSidebar />
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
