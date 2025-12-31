import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
      <main className="newsletter-card">
        <div className="content-section">
          <h1>Stay in the Loop</h1>
          <p>Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.</p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="subscribe-btn">
              <span>Subscribe</span>
              <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </div>
      </main>

      
  );
};

export default NewsletterPage;