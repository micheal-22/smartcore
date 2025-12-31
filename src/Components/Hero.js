import React, { useState } from 'react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="hero-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">ET</div>
          <span>IT Company.</span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-quote">Get A Quote</button>
          <button 
            className="mobile-menu-icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-text-wrapper">
          <div className="sub-headline">
            <span className="line"></span>
            Experience The Best IT Solutions
          </div>
          <h1>Where Creativity Meets Cutting-Edge Technology</h1>
          <p>
            Your trusted partner for professional, reliable, and affordable 
            digital solutions—delivering seamless results for startups, 
            enterprises, and global brands with care and precision.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Explore More →</button>
            <a href="#services" className="link-secondary">View All Services</a>
          </div>
        </div>
      </section>
      
      <div className="hero-overlay"></div>
    </div>
  );
};

export default Hero;