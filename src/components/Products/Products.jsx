import React from "react";
import Product from "./Product";

function Products({ data }) {
  console.log(data);
  return (
    <div className="row row-cols-1 row-cols-sm-2 align-stretch row-cols-md-3 g-3 my-4">
      {data &&
        data.map((i) => (
          <div className="col">
            <Product {...i} />
          </div>
        ))}
    </div>
  );
}

export default Products;
