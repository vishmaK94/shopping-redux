import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products: ", products);

  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <ProductComponent />
      )}
    </div>
  );
};

export default ProductListing;
