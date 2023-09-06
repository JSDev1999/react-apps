import React from "react";

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best care and comfort. After all, they carry you
          through every step of your journey. Treat them with the finest
          footwear, designed for both style and support.
        </p>

        <div className="hero-buttons">
          <button>Shop Now</button>
          <button className="sec-btn">Categories</button>
        </div>

        <div className="shopping">
          <p>Also available in</p>
          <div className="brand-icons">
            <img src="./images/amazon.png" alt="" />
            <img src="./images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
