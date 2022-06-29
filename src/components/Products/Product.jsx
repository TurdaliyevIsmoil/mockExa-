import React from "react";
import { NavLink } from "react-router-dom";

function Product(props) {
  return (
    <div class="card shadow-sm bg-secondary h-100 overflow-hidden">
      <img
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
        src={props.images[0]}
        alt=""
      />

      <div class="card-body">
        <h4>{props.title}</h4>
        <p class="card-text">{props.description.slice(0, 120)}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <NavLink to={`/product/${props.id}`}>
              <span class="btn   btn-sm btn-outline-light">View</span>
            </NavLink>
          </div>
          <small class="text-light fw-bold">${props.price}</small>
        </div>
      </div>
    </div>
  );
}

export default Product;
