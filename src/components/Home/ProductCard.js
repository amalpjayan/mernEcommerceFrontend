import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <div
        className="card mx-2 my-2"
        style={{ width: "18rem", height: "auto" }}
      >
        <img
          src={product.images[0].url}
          className="card-img-top"
          alt={product.name}
          style={{ height: "auto" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                {product.category}
              </a>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="text-dark mb-0">{product.name}</h5>
            <h5 className="text-danger mb-0">₹{product.price}</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              <span className="fw-bold productCardSpan">{product.numOfReviews} reviews</span>
            </p>
            <div className="ms-auto text-warning ">
              <Rating {...options} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
