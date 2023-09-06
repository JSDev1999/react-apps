import React from "react";

const Navigations = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src={"./images/brand_logo.png"} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
      <button>Get Started</button>
    </nav>
  );
};

export default Navigations;
