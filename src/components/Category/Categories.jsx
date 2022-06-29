import React from "react";
import CategoryItem from "./CategoryItem";

function Categories({data}) {
  return (
    <div className="d-flex my-5 row">
      {data.length > 0 &&
        data.map((i) => (
          <div className="col-4 mb-4">
            <CategoryItem title={i} />
          </div>
        ))}
    </div>
  );
}

export default Categories;
