import React from 'react';
import './AboutUsPage.css';

export const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="section">
        <h1 className="section-title">About Us</h1>
        <div className="section-content">
          <p>Welcome to our jewelry store!</p>
          <p>We are passionate about creating stunning and timeless jewelry pieces that reflect the beauty of life and love. Our team of skilled artisans handcrafts each piece with precision and care, using only the finest materials.</p>
          <p>At our store, we strive to provide exceptional customer service and offer a wide selection of exquisite jewelry for every occasion. Whether you're shopping for an engagement ring, a special gift, or a treat for yourself, we have something for everyone.</p>
          <p>Thank you for choosing our store for your jewelry needs. We look forward to helping you find the perfect piece that will be cherished for a lifetime.</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Technologies We Use</h2>
        <div className="section-content">
          <ul>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
