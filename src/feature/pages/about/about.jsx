import React from "react";
import Divider from '@mui/material/Divider';
import "./AboutUsPage.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="section">
        <h2 className="section-title">About Us</h2>
        <div className="section-content">
          <p>Welcome to our jewelry store!</p>
          <p>
            We are passionate about creating stunning and timeless jewelry
            pieces that reflect the beauty of life and love. Our team of skilled
            artisans handcrafts each piece with precision and care, using only
            the finest materials.
          </p>
          <p>
            At our store, we strive to provide exceptional customer service and
            offer a wide selection of exquisite jewelry for every occasion.
            Whether you're shopping for an engagement ring, a special gift, or a
            treat for yourself, we have something for everyone.
          </p>
          <p>
            Thank you for choosing our store for your jewelry needs. We look
            forward to helping you find the perfect piece that will be cherished
            for a lifetime.
          </p>
        </div>
      </div>


      <div className="section">
      <Divider />
        <h2 className="section-title">Technologies We Use</h2>
        <div className="section-content">
          <h3>Technologies and libraries Used</h3>
          <ul className="tech-list">
            <li>React.js: Frontend development</li>
            <li>CSS: Styling and layout</li>
            <li>JavaScript: Frontend scripting</li>
            <li>Webpack: Module bundling</li>
            <li>HTML5</li>
            <li>React material</li>
            <li>yarn</li>
            <li>framer-motion</li>
          </ul>

          <Divider />
          <h3>Navigation Design</h3>
          <p>
            Navigation is designed to be intuitive and user-friendly.
          </p>
          <p className="nav-details">
            Accessibility: The navigation layout is designed to be intuitive and
            accessible, ensuring that users can easily locate and navigate
            between different sections of the website.
          </p>
          <p className="nav-details">
            User Experience: The navigation structure prioritizes user experience by offering clear
            and straightforward pathways to essential sections, enhancing
            usability and encouraging exploration.
          </p>
          <p className="nav-details">
            Consistency: The navbar
            remains consistent across all pages, providing users with a familiar
            interface and facilitating seamless navigation throughout the
            website.
          </p>
          <p className="nav-details">
            Efficiency: The navigation layout is designed to optimize
            efficiency, allowing users to accomplish tasks such as browsing
            products, learning about the brand, or contacting support with
            minimal effort and maximum convenience.
          </p>
          <p>
            Main goal is to provide a
            seamless browsing experience for customers.
          </p>

          <Divider />
          <h3>Why Our Website Meets Requirements</h3>
          <p>
            We believe our website meets the requirements outlined in this
            document for several reasons:
          </p>
          <ul className="req-list">
            <li>
              Accessibility: We've ensured all images have appropriate alt
              text for screen readers, and our navigation is keyboard
              accessible.
            </li>
            <li>
              Responsive Design: Our website is designed to be responsive and
              accessible on various devices, ensuring a consistent experience
              for all users.
            </li>
            <li>
              Clear Navigation: We've carefully planned and organized our
              navigation to make it easy for users to find what they're
              looking for.
            </li>
            <li>
              Content Quality: Our product descriptions are informative and
              descriptive, helping users make informed purchasing decisions.
            </li>
            <li>
              Performance: We've optimized our website for performance to
              ensure fast loading times and a smooth browsing experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
