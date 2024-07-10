import React from "react";
import Image from "next/image";
import "./ProductWrapper.css";

const ProductWrapper = ({ data }) => {
  console.log(data);
  // Limit the number of products displayed to 8
  const productsToShow = data && data.products ? data.products.slice(0, 8) : [];

  return (
    <div className="productWrapper container">
      {productsToShow.map((product) => (
        <div key={product.id} className="productCard">
          <div className="imgContainer">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={250}
              height={250}
              className="productImage"
            />
          </div>
          <p className="productDescription">{product.description}</p>
          <div className="productDetails">
            <p className="productName">{product.name}</p>
            <p className="productPrice">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
