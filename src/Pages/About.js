import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-heading">About Our Store</h1>
          <p className="about-paragraph">
            Welcome to our eCommerce platform, where we bring you the best
            products at unbeatable prices. Our mission is to create a seamless
            and delightful shopping experience tailored just for you. From
            trending fashion to the latest gadgets, we have everything you
            need—all in one place.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://magenest.com/wp-content/uploads/2024/12/benefits-of-eCommerce-websites-1.webp"
            alt="eCommerce"
            className="about-image"
          />
        </div>

        <div className="mission-section">
          <div className="mission-text">
            <h2 className="mission-heading">Our Mission</h2>
            <p className="mission-paragraph">
              Welcome to InstantBuy, your one-stop online destination for
              quality products at unbeatable prices. Whether you're looking for
              the latest fashion, electronics, home essentials, or personal
              care, we've got something for everyone. We bring convenience and
              quality right to your fingertips.
            </p>
          </div>
          <div className="mission-image-container">
            <img
              src="https://www.syte.ai/wp-content/uploads/2022/07/cover.jpg"
              alt="our mission"
              className="mission-image"
            />
          </div>
        </div>

        <div className="vision-section">
          <div className="vision-image-container">
            <img
              src="https://img.freepik.com/premium-photo/futuristic-online-shopping-ecommerce-concept_952778-10774.jpg"
              alt="our vision"
              className="vision-image"
            />
          </div>
          <div className="vision-text">
            <h2 className="vision-heading">Our Vision</h2>
            <p className="vision-paragraph">
              At InstantBuy, we envision a world where shopping is not just a
              task but an experience. We aim to be the go-to platform for all
              your shopping needs, offering a diverse range of products that
              cater to every taste and preference. Our commitment to quality,
              affordability, and customer satisfaction drives us to continuously
              innovate and improve. We envision becoming the most
              customer-centric eCommerce platform globally — a place where
              anyone can find exactly what they need with confidence. As
              technology evolves, we’ll keep innovating to make shopping
              smarter, greener, and more personalized for every user.
            </p>
          </div>
        </div>
        <div className="values-section">
          <h2 className="values-heading">Our Values</h2>
          <div className="values-items-container">
            <div className="values-item">
              <div className="values-item-card">
                <h3 className="values-item-heading">Customer-Centricity</h3>
                <img
                  src="https://files.techmahindra.com/static/img/customer-centricity-office.png"
                  alt="customer centricity"
                  className="card-image"
                />
                <p className="values-item-paragraph">
                  We put our customers at the heart of everything we do. Your
                  satisfaction is our top priority.
                </p>
              </div>
            </div>
            <div className="values-item">
              <div className="values-item-card">
                <h3 className="values-item-heading">Integrity</h3>
                <img
                  src="https://i.pinimg.com/736x/64/95/8a/64958a0dbd182141d5fbe4b92f888e7e.jpg"
                  alt="integrity"
                  className="card-image"
                />
                <p className="values-item-paragraph">
                  We believe in honesty and transparency in all our dealings.
                  Trust is the foundation of our relationship with you.
                </p>
              </div>
            </div>
            <div className="values-item">
              <div className="values-item-card">
                <h3 className="values-item-heading">Innovation</h3>
                <img
                  src="https://img.freepik.com/premium-photo/ai-technology-concept-businessman-holding-light-bulb-with-ai-tools-big-data-network-connection-ai-learning-science-artificial-intelligence-technology-innovation-futuristic_562687-6764.jpg?semt=ais_hybrid&w=740"
                  alt="innovation"
                  className="card-image"
                />
                <p className="values-item-paragraph">
                  We embrace change and continuously seek new ways to enhance
                  your experience. Our team is dedicated to bringing you the
                  latest solutions.
                </p>
              </div>
            </div>
            <div className="values-item">
              <div className="values-item-card">
                <h3 className="values-item-heading">Sustainability</h3>
                <img
                  src="https://media.istockphoto.com/id/1489061272/photo/crystal-earth-on-ferns-in-green-grass-forest-with-sunlight-environment-save-the-world-earth.jpg?s=612x612&w=0&k=20&c=WVbWtdV-FrGafT5SsilWOTT8nd8_2x5EiAp8gn7jS4k="
                  alt="sustainability"
                  className="card-image"
                />
                <p className="values-item-paragraph">
                  We are committed to reducing our environmental impact and
                  promoting sustainable practices in all aspects of our
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
