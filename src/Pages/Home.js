import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 ref={headingRef} className="hero-heading">
            Welcome to InstantBuy
          </h1>
          <p className="description-text">
            InstantBuy is a revolutionary platform that allows you to buy and
            sell products instantly. With our user-friendly interface and secure
            payment system, you can shop with confidence. Join us today and
            experience the future of online shopping!
          </p>
          <div className="cta-container">
            <button className="cta-button">Get Started</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            className="hero-image"
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
            alt="Online shopping experience"
          />
        </div>
      </div>
      <div className="shop-section">
        <h1 className="shop-heading">Shop by Category</h1>
        <div className="category-container">
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.shutterstock.com/image-photo/concept-motherboard-picture-brain-technology-260nw-2422220481.jpg"
              alt="Electronics"
            />
            <h2 className="category-title">Electronics</h2>
          </div>
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.shutterstock.com/image-photo/concept-motherboard-picture-brain-technology-260nw-2422220481.jpg"
              alt="Electronics"
            />
            <h2 className="category-title">Electronics</h2>
          </div>
          <div className="category-card">
            <img
              className="category-image"
              src="https://www.shutterstock.com/image-photo/concept-motherboard-picture-brain-technology-260nw-2422220481.jpg"
              alt="Electronics"
            />
            <h2 className="category-title">Electronics</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
