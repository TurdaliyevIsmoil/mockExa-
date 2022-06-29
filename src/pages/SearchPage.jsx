import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Products from "../components/Products/Products";
import { searchProducts } from "../Store/fetch-action";

function SearchPage() {
  const location = useLocation();
  const [products, setproducts] = useState();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get("key");
    (async () => {
      const res = await searchProducts(key);
      setproducts(res.products);
    })();
  }, [location]);
  return (
    <>
      {products?.length > 0 ? <Products data={products} /> : <h2 className="mt-4">No Products Found</h2>}
      {/* <Pagination /> */}
    </>
  );
}

export default SearchPage;
