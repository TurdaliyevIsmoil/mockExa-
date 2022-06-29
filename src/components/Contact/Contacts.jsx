import React from "react";
import ContactLinks from "./ContactLinks";

function Contacts() {
  return (
    <main>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Contacts</h1>
        <p className="fs-5 text-secondary">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <ContactLinks />
    </main>
  );
}

export default Contacts;
