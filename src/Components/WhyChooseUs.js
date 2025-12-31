import React from 'react';
import { FaEuroSign, FaUserTie, FaBriefcase, FaTrophy, FaPlay } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaEuroSign />,
      title: "Affordable Price",
      desc: "We offer high-quality cleaning services at prices that fit your budget."
    },
    {
      icon: <FaUserTie />,
      title: "Professional Team",
      desc: "Our skilled team delivers reliable, high-quality cleaning with attention to detail."
    },
    {
      icon: <FaBriefcase />,
      title: "15+ Years Experience",
      desc: "Serving homes and businesses with excellence for over 15 years."
    },
    {
      icon: <FaTrophy />,
      title: "Award Winning",
      desc: "Award-winning service you can trust."
    }
  ];

  return (
    <div style={{background:'#0b0d17', padding:'20px 0'}}>
        <section className="why-choose-us">
        <div className="container">
            {/* Header Row */}
            <div className="section-header">
            <div className="header-left">
                <span className="subtitle">Why Choose Us</span>
                <h1>Why Trust Us For Your IT Needs?</h1>
            </div>
            <div className="header-right">
                <button className="quote-btn">Get a Quote</button>
            </div>
            </div>

            {/* Content Row */}
            <div className="content-grid">
            {/* Video/Image Side */}
            <div className="image-wrapper">
                <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                />
                <div className="play-button">
                <FaPlay />
                </div>
            </div>

            {/* Features Side */}
            <div className="features-grid">
                {features.map((item, index) => (
                <div className="feature-card" key={index}>
                    <div className="icon-box">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default WhyChooseUs;