import React from "react";

export default function Discover() {
  return (
  <>
    <div className="discover" >
      <div className="bg-text">
        <h1>Discover the world <br />
          of plants with us</h1>
        <h5 style={{ fontWeight: "lighter" }}>Explore our extensive plant database and find the perfect plants
          <br />for your garder. With over 30.000 plants to choosefrom, you'll have all
          <br />the information you need to create beautiful and thriving garder.
        </h5>
      </div>
    </div>
    <div className="discover-row">
      <div style={{ textAlign: "left" }}>
        <h1>Discover the plants for  <br />
          your garden with our advanced <br />search filters.</h1>
        <h5 style={{ fontWeight: "lighter" }}>Easily find plants based on their characteristics, such as sun exposure,
          <br />water requirements, and more. Start exploring now!
        </h5>
      </div>

      <div className="discover-row-image"></div>
    </div>
  </>
  );
}
