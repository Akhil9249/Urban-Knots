import React from 'react';
import './Footer.css';
import footerGraphic from '../../../assets/images/Rectangle.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Decorative Overlapping Glass Spheres Graphic */}
      <div className="footer-graphic-container">
        <img 
          src={footerGraphic} 
          alt="Abstract purple 3D spheres background graphic" 
          className="footer-fluid-graphic"
        />
      </div>

      <div className="footer-container">
        
        {/* Column 1: Branding and Social Links */}
        <div className="footer-column branding-col">
          <h2 className="footer-logo">
            Urban <span className="logo-thin">Knots</span>
          </h2>
          <p className="footer-branding-text">
            Creating meaningful brands through creativity, strategy, and innovation.
          </p>
          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <img src="/images/footer/insta.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <img src="/images/footer/in.png" alt="LinkedIn" />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Behance">
              <img src="/images/footer/be.png" alt="Behance" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column links-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#testimonials-faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Services Links */}
        <div className="footer-column links-col">
          <h3 className="footer-col-title">Services</h3>
          <ul className="footer-links-list">
            <li><a href="#services">Branding & Identity</a></li>
            <li><a href="#services">Creative Design</a></li>
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">UI/UX Design</a></li>
            <li><a href="#services">Digital Marketing</a></li>
            <li><a href="#services">Video & Motion Graphics</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Links */}
        <div className="footer-column contact-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul className="footer-contact-list">
            
            {/* Email Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/mail.png" alt="Email" />
              </span>
              <a href="mailto:urbanknotsllp@gmail.com" className="contact-link-text">
                urbanknotsllp@gmail.com
              </a>
            </li>

            {/* Phone Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/phone.png" alt="Phone" />
              </span>
              <span className="contact-link-text">
                +91 8281 919 151, +91 8129 195 151
              </span>
            </li>

            {/* Address Row */}
            <li className="contact-item">
              <span className="contact-icon-wrapper">
                <img src="/images/footer/location.png" alt="Location" />
              </span>
              <span className="contact-link-text">
                C-29, 3rd Floor, Malabar Gate,<br />
                Ram Mohan Road, Kozhikode - 673004
              </span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright details */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          &copy; 2026 Urban Knots. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
