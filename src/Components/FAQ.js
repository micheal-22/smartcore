import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const faqData = [
  {
    question: "What services does your company provide?",
    answer: "We provide a wide range of IT solutions including web development, mobile app design, and cloud infrastructure management tailored to your business needs."
  },
  {
    question: "What industries do you serve?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore....."
  },
  {
    question: "Do you offer customized IT solutions?",
    answer: "Yes, every project we undertake is customized to meet the specific requirements and goals of our clients."
  },
  {
    question: "How can I contact your support team?",
    answer: "You can reach our support team via the contact form on our website, email at support@example.com, or through our 24/7 live chat."
  },
  {
    question: "How secure are your IT solutions?",
    answer: "Security is our top priority. We implement industry-standard encryption, regular audits, and robust firewall protections."
  },
  {
    question: "Do you offer 24/7 technical support?",
    answer: "Absolutely. Our technical support team is available around the clock to ensure your systems run smoothly."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Defaulting to index 1 to match the image

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1 className="faq-title">
          Questions? <span>Look here</span>
        </h1>

        <div className="accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <span className="icon">
                  {activeIndex === index ? <FiMinusCircle /> : <FiPlusCircle />}
                </span>
              </div>
              
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;