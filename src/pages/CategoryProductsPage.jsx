import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../Store/fetch-action";

function CategoryProductsPage() {
  const [title, settitle] = useState("");
  const [pag, setpag] = useState(0);
  const [products, setproducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    settitle(params.id || "");
    (async () => {
      const res = await fetchCategoryProducts(params.id, pag + 6, pag);
      setproducts(res);
    })();
  }, []);
  return (
    <>
      <h3 className="mt-3">
        Category:{" "}
        <span
          className="fw-bold text-secondary"
          style={{ textTransform: "capitalize" }}
        >
          {title}
        </span>
      </h3>
      <Products data={products.products} />
      {/* <Pagination total={products.count} current={pag} set={setpag} /> */}
    </>
  );
}

export default CategoryProductsPage;
