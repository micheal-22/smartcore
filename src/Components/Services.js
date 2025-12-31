import React from 'react';

const Services = () => {
  const serviceData = [
    {
      title: "Website Design",
      description: "We provide outstanding style with a minimalist, clean, futuristic design.",
      icon: "🖥️", // You can replace these with FontAwesome or SVG icons
    //   highlight: true
    },
    {
      title: "Mobile Application",
      description: "We work on mobile applications by researching the user experience.",
      icon: "📱",
      highlight: false
    },
    {
      title: "Branding",
      description: "We help implement what the company wants.",
      icon: "🎨",
      highlight: false
    }
  ];

  return (
    <div style={{background:'#f8f9fa', padding:'20px 0'}}>
        <section className="services-container">
        <div className="services-header">
            <div className="header-text">
            <span className="subtitles">Our Services</span>
            <h1>Services we provide to <br /><span>Elevate Your Business</span></h1>
            </div>
            <button className="see-all-btn">See all Services</button>
        </div>

        <div className="services-grid">
            {serviceData.map((service, index) => (
            <div key={index} className={`service-card ${service.highlight ? 'highlight' : ''}`}>
                <div className="icon-wrapper">
                {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
            ))}
        </div>
        </section>
    </div>
  );
};

export default Services;