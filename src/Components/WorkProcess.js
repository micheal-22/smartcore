import React from 'react';
import { HiOutlineClipboardList, HiOutlineLightBulb } from 'react-icons/hi';
import { FaLayerGroup, FaRegSmileBeam } from 'react-icons/fa';

const WorkProcess = () => {
  const steps = [
    {
      id: '01',
      title: 'Consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <HiOutlineClipboardList />,
    },
    {
      id: '02',
      title: 'Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <HiOutlineLightBulb />,
    },
    {
      id: '03',
      title: 'Implementation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <FaLayerGroup />,
    },
    {
      id: '04',
      title: 'Final Result',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <FaRegSmileBeam />,
    },
  ];

  return (
    <section className="process-wrapper">
      <div className="process-header">
        <div className="subtitle-container">
          <span className="line"></span>
          <span className="subtitle">Our Work Process</span>
        </div>
        <h2>Our Proven <span className="highlight">Work Process</span></h2>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div key={step.id} className="process-card">
            <div className="icon-container">
              <div className="main-circle">
                {step.icon}
                <div className="number-badge">{step.id}</div>
              </div>
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && <div className="desktop-connector"></div>}
            </div>
            <div className="process-info">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;