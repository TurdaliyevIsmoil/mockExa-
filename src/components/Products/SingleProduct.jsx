import React, { useEffect, useState } from "react";

function SingleProduct({ data }) {
  const [mainImg, setmainImg] = useState();
  useEffect(() => {
    setmainImg(data?.images[0]);
  }, [data]);
  if (!data) {
    return "Loading...";
  }
  return (
    <div className="py-5 mb-4 rounded-3">
      <img
        src={mainImg}
        alt=""
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
        className="img-fluid w-100"
      />
      <div className="d-flex row">
        {data?.images.map((i) => (
          <div className="col">
            <img
              onClick={() => setmainImg(i)}
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
              src={i}
              alt=""
              className="img-fluid w-100 my-4"
            />
          </div>
        ))}
      </div>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{data.title}</h1>
        <p className="col-md-8 fs-4">{data.description}</p>
        <p>
          <strong>Price:</strong> {data.price}
        </p>
        <p>
          <strong>Rating:</strong> {data.rating}
        </p>
        <p>
          <strong>Stock:</strong> {data.stock && "in stock"} ({data.rating})
        </p>
        <p>
          <strong>Brand:</strong> {data.brand}
        </p>
        <p>
          <strong>Category:</strong> {data.category}
        </p>
      </div>
    </div>
  );
}

export default SingleProduct;
