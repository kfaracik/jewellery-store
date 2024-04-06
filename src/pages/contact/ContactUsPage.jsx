import React from 'react';
import './contact.css';

export const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to contact us. Our team will be happy to assist you.</p>
        <div className="info">
          <div className="info-item">
            <h2>Location</h2>
            <p>1234 Jewelry Street<br />City, Country</p>
          </div>
          <div className="info-item">
            <h2>Email</h2>
            <p>info@example.com</p>
          </div>
          <div className="info-item">
            <h2>Phone</h2>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};