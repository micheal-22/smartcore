import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <div className="contact-container">
        {/* Left Side: Form */}
        <div className="form-section">
          <h1>Get Your <span>Free Quote</span> Today!</h1>
          
          <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Ex. john Doe" required />
            </div>

            <div className="input-group">
              <label>Email*</label>
              <input type="email" placeholder="example@gmail.com" required />
            </div>

            <div className="input-group">
              <label>Phone*</label>
              <input type="tel" placeholder="Enter Phone Number" required />
            </div>

            <div className="input-group">
              <label>Service</label>
              <select defaultValue="">
                <option value="" disabled>Select services</option>
                <option value="web">Web Development</option>
                <option value="design">UI/UX Design</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label>Your Message *</label>
              <textarea placeholder="Enter Here..." rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side: Sidebar */}
        <div className="info-section">
          <div className="info-block">
            <h3>Address</h3>
            <p>2464 Royal Ln. Mess,<br />New Jersey 45463</p>
          </div>

          <div className="info-block">
            <h3>Contact</h3>
            <p>Phone : +(000) 000-000</p>
            <p>Email : example@gmail.com</p>
          </div>

          <div className="info-block">
            <h3>Open Time</h3>
            <p>Monday - Friday : 10:00 - 20:00</p>
          </div>

          <div className="info-block">
            <h3>Stay Connected</h3>
            <div className="social-icons">
              <a href="#" className="icon-circle"><FaFacebookF /></a>
              <a href="#" className="icon-circle"><FaTwitter /></a>
              <a href="#" className="icon-circle"><FaInstagram /></a>
              <a href="#" className="icon-circle"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;