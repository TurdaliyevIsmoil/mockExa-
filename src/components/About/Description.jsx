import React from "react";

function Description() {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
      <div className="col-md-8 p-lg-7 mx-auto my-5">
        <h1 className="display-4 fw-normal">Ismoil Turdaliyev</h1>
        <p className="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple’s marketing pages.
        </p>
        <a className="btn btn-outline-secondary" href="#">
          Coming soon
        </a>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
}

export default Description;
