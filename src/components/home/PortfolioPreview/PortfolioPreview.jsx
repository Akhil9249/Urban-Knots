import React, { useState } from 'react';
import './PortfolioPreview.css';

const ViewAllProjectsIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PortfolioPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    // Page 1
    {
      id: 1,
      title: 'Branding',
      category: 'Branding, Identity',
      image: '/images/portfolio/Branding.png',
      page: 0
    },
    {
      id: 2,
      title: 'Website',
      category: 'Web Design, Devlopment',
      image: '/images/portfolio/Web.jpg',
      page: 0
    },
    {
      id: 3,
      title: 'Digital Marketing',
      category: 'Social Media Management, SEO, Etc.',
      image: '/images/portfolio/Marketing.jpg',
      page: 0
    },
    // Page 2
    {
      id: 4,
      title: 'Packaging Design',
      category: 'Product Packaging, Identity',
      image: '/images/portfolio/Branding.png',
      page: 1
    },
    {
      id: 5,
      title: 'App Design',
      category: 'UI/UX, Mobile App',
      image: '/images/portfolio/Web.jpg',
      page: 1
    },
    {
      id: 6,
      title: 'SEO & Performance',
      category: 'Digital Strategy, Growth',
      image: '/images/portfolio/Marketing.jpg',
      page: 1
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <span className="portfolio-subtitle">OUR WORKS</span>
            <h2 className="portfolio-heading">Featured Projects</h2>
          </div>
          <div className="portfolio-header-right">
            <p className="portfolio-header-description">
              Every project is driven by our passion for creativity, strategy, and solving real business challenges. Explore some of our recent work.
            </p>
            <button className="view-all-projects-btn">
              View All Projects
              <ViewAllProjectsIcon />
            </button>
          </div>
        </div>

        {/* Carousel Slider Outer Track */}
        <div className="portfolio-slider-outer">
          <div 
            className="portfolio-slider-inner" 
            style={{ transform: `translateX(-${currentPage * 50}%)` }}
          >
            {/* Page 1 Grid */}
            <div className="portfolio-grid-page">
              {projects.filter(p => p.page === 0).map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-card-image-box">
                    <img src={project.image} alt={project.title} className="project-card-img" />
                  </div>
                  <div className="project-card-details">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-category">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Page 2 Grid */}
            <div className="portfolio-grid-page">
              {projects.filter(p => p.page === 1).map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-card-image-box">
                    <img src={project.image} alt={project.title} className="project-card-img" />
                  </div>
                  <div className="project-card-details">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-category">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="portfolio-dots">
          <button 
            className={`portfolio-dot ${currentPage === 0 ? 'active' : ''}`}
            onClick={() => setCurrentPage(0)}
            aria-label="View page 1"
          />
          <button 
            className={`portfolio-dot ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(1)}
            aria-label="View page 2"
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;
