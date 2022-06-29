import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/Products/SingleProduct";
import { fetchProduct } from "../Store/fetch-action";

function SingleProductPage() {
  const [product, setproduct] = useState();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      (async () => {
        const res = await fetchProduct(params.id);
        setproduct(res);
      })();
    }
  }, []);
  return <SingleProduct data={product} />;
}

export default SingleProductPage;
