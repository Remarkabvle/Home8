import React from "react";
import Image from "next/image";
import "./ProductWrapper.css";
import Link from "next/link";

const ProductWrapper = ({ data }) => {
  console.log(data);
  const productsToShow = data && data.products ? data.products.slice(0, 8) : [];

  return (
    <>
      <h1 className="title">Products</h1>
      <p className="subtitle">Order it for you or for your beloved ones</p>
      <div className="productWrapper container">
        {productsToShow.map((product) => (
          <div key={product.id} className="productCard">
            <div  className="imgContainer">
              <Link   className="imgContainer" href={`/product/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="productImage"
                />
              </Link>
            </div>
            <p className="productDescription">{product.description}</p>
            <div className="productDetails">
              <p className="productName">{product.name}</p>
              <p className="productPrice">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductWrapper;
