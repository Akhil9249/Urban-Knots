import React from 'react';
import './WhyChooseUs.css';

// Custom SVG Icons matching Figma designs
const LightbulbIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const HourglassIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M5 2h14" />
    <path d="M5 22h14" />
    <path d="M19 2v4c0 2.5-2 4.5-4.5 5.5a2.5 2.5 0 0 0 0 1c2.5 1 4.5 3 4.5 5.5v4" />
    <path d="M5 2v4c0 2.5 2 4.5 4.5 5.5a2.5 2.5 0 0 0 0 1C7 13.5 5 15.5 5 18v4" />
  </svg>
);

const ProcessIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    {/* Interconnected loops style for transparent process */}
    <path d="M12 22a10 10 0 1 0-10-10" strokeDasharray="3 3" />
    <path d="M22 12a10 10 0 0 1-10 10" />
    <circle cx="12" cy="12" r="3" />
    <path d="m16 8-4 4-4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TrendUpIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 20h18" />
    <path d="m3 12 5-5 4 4 6-6" />
    <path d="M14 5h4v4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="card-icon-svg"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg 
    width="34" 
    height="34" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="arrow-icon"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <img src="/images/portfolio/Creative.png" alt="Creative Thinking" className="card-icon-img" />,
      title: 'Creative Thinking',
      description: 'Fresh ideas that help your brand stand out.'
    },
    {
      id: 2,
      icon: <img src="/images/portfolio/Strategic.png" alt="Strategic Approach" className="card-icon-img" />,
      title: 'Strategic Approach',
      description: 'Every decision is backed by research and purpose.'
    },
    {
      id: 3,
      icon: <img src="/images/portfolio/Transparent.png" alt="Transparent Process" className="card-icon-img" />,
      title: 'Transparent Process',
      description: 'Clear communication from start to finish.'
    },
    {
      id: 4,
      icon: <ClockIcon />,
      title: 'One-Time Delivery',
      description: 'We value your time and always meet deadlines.'
    },
    {
      id: 5,
      icon: <img src="/images/portfolio/Startup.png" alt="Startup Friendly" className="card-icon-img" />,
      title: 'Startup Friendly',
      description: 'Flexible solutions tailored for growing businesses.'
    },
    {
      id: 6,
      icon: <img src="/images/portfolio/Dedicated.png" alt="Dedicated support" className="card-icon-img" />,
      title: 'Dedicated support',
      description: "We're with you even after the project goes live."
    }
  ];

  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="why-choose-us-container">
        
        {/* Left Side: Content Column */}
        <div className="why-choose-us-content">
          <span className="why-choose-us-subtitle">WHY CHOOSE US</span>
          <h2 className="why-choose-us-title">
            Strategy. Creativity.<br />Results.
          </h2>
          <p className="why-choose-us-description">
            We don't just create beautiful designs—we build experiences and solutions that help businesses grow.
          </p>
          <button className="why-choose-us-btn">
            About Urban Knots
            <ArrowUpRightIcon />
          </button>
        </div>

        {/* Right Side: Grid Column */}
        <div className="why-choose-us-grid">
          {features.map((feature) => (
            <div key={feature.id} className="why-choose-us-card">
              <div className="why-choose-us-card-icon">
                {feature.icon}
              </div>
              <div className="why-choose-us-card-info">
                <h3 className="why-choose-us-card-title">{feature.title}</h3>
                <p className="why-choose-us-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
