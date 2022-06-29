import React from "react";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <section className="py-5 text-light text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Welcome to Store!</h1>
          <p className="lead text-secondary">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <NavLink to={"/categories"} className="btn btn-primary ml-2">
              Open Categories
            </NavLink>{" "}
            <NavLink to={'/about'} className="btn btn-secondary my-2">
              Little bit about us
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
