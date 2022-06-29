import React from "react";
import { NavLink } from "react-router-dom";

function CategoryItem({ title }) {
  return (
    <NavLink
      style={{ textTransform: "capitalize" }}
      className="border-secondary category card border-2 bg-dark d-flex rounded-2 w-100 h-100 p-3 align-center text-secondary h3"
      to={title}
    >
      {title}
    </NavLink>
  );
}

export default CategoryItem;
