import React from 'react';
import './Hero.css';

const Hero = () => {
  // Sample data for the brand logos strip
  const brandLogos = [
    { name: 'habit', type: 'habit' },
    { name: 'MK', type: 'mk' },
    { name: 'azhak', type: 'azhak' },
    { name: 'JELLYFISH', type: 'jellyfish' },
    { name: 'onedi', type: 'onedi' },
    { name: 'Arif Associates', type: 'arif' },
    { name: 'JELLYFISH', type: 'jellyfish' },
    { name: 'onedi', type: 'onedi' },
    { name: 'Arif Associates', type: 'arif' }
  ];

  const renderLogo = (logo) => {
    switch (logo.type) {
      case 'habit':
        return (
          <div className="logo-brand logo-habit">
            <span className="habit-text">habit</span>
            <div className="habit-stars">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
              <svg width="6" height="6" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
            </div>
          </div>
        );
      case 'mk':
        return (
          <div className="logo-brand logo-mk">
            <div className="mk-main">MK</div>
            <div className="mk-sub">PROFESSIONAL</div>
          </div>
        );
      case 'azhak':
        return (
          <div className="logo-brand logo-azhak">
            <div className="azhak-icon-wrapper">
              <svg width="18" height="12" viewBox="0 0 24 16" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
                <path d="M1 8c3-5 12-5 16 0-3 5-12 5-16 0z" />
                <path d="M17 8l5 4V4l-5 4z" />
                <circle cx="13" cy="8" r="1.5" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="azhak-text">azhak</span>
          </div>
        );
      case 'jellyfish':
        return (
          <div className="logo-brand logo-jellyfish">
            <span className="jf-main">JELLYFISH</span>
            <span className="jf-sub">WATER SPORTS</span>
            <div className="jf-waves">
              <svg width="55" height="4" viewBox="0 0 60 4" fill="none" stroke="#FFFFFF" strokeWidth="1">
                <path d="M0 2 Q 7.5 0, 15 2 T 30 2 T 45 2 T 60 2" />
              </svg>
            </div>
          </div>
        );
      case 'onedi':
        return (
          <div className="logo-brand logo-onedi">
            <div className="onedi-icon">
              <div className="onedi-dot"></div>
            </div>
            <span className="onedi-text">onedi</span>
          </div>
        );
      case 'arif':
        return (
          <div className="logo-brand logo-arif">
            <div className="arif-icon"></div>
            <div className="arif-text">
              <span className="arif-main">Arif</span>
              <span className="arif-sub">Associates</span>
            </div>
          </div>
        );
      default:
        return <span>{logo.name}</span>;
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        
        {/* Left Column: Text Content */}
        <div className="hero-text-content">
          <h1 className="hero-heading">
            We Create <span className="highlight-purple">Brands</span>
            <br />
            people remember.
          </h1>
          
          <p className="hero-description">
            Urban Knots is a creative agency that transforms ideas into brands people connect with. From strategy and identity to digital experiences and marketing, we create work that doesn't just look good—it gets noticed, starts conversations, and drives growth.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Let's Build Your Brand
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary">
              View Our Work
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* Abstract Graphic */}
        <img 
          src="/images/hero/fluid-graphic.png" 
          alt="Abstract purple fluid graphic" 
          className="fluid-graphic"
        />
      </div>

      {/* Bottom Section: Trusted Brands */}
      <div className="trusted-brands-section">
        <div className="divider-line">
          <span>TRUSTED BY GROWING BRANDS</span>
        </div>
        
        <div className="brands-logo-strip">
          <div className="brands-logo-track">
            {brandLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="brand-logo-container">
                {renderLogo(logo)}
              </div>
            ))}
            {brandLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="brand-logo-container">
                {renderLogo(logo)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable SVG Arrow Component
const ArrowRightIcon = () => (
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

export default Hero;
