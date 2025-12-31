import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left Column: Text & Stats */}
        <div className="about-left">
          <div className="content-wrapper">
            <div className="section-tag">
              <span className="line"></span>
              Why Choose Us
            </div>
            <h2 className="about-title">
              Transforming <span className="highlight">ideas into Digital Reality</span>
            </h2>
            <p className="about-description">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
              Sunt qui esse pariatur duis deserunt mollit dolore cillum 
              minim tempor enim. Elit aute irure tempor cupidatat 
              incididunt sint deserunt ut voluptate aute id deserunt nisi.
            </p>
            <button className="btn-outline">Learn More</button>
          </div>

          {/* Statistics Bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <h3>250+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Column: Image Composition */}
        <div className="about-right">
          <div className="image-frame-container">
            {/* Dark background square */}
            <div className="bg-navy-square"></div>
            {/* White outline frame */}
            <div className="white-outline"></div>
            {/* Blue circle element */}
            <div className="blue-circle-sketch"></div>
            
            <div className="image-card">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
              />
              <div className="image-footer">
                <a href="#team">See Our Team →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;