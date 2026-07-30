import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

// Reusable SVG Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
);

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="m8 12 4 4 4-4"/><path d="M12 8v8"/>
  </svg>
);

// Reusable Component for Image Grid Sections (Print, Packaging, etc.)
const CategorySection = ({ title, description, images, isVertical = false }) => {
  return (
    <section className="category-section">
      <div className="category-header">
        <div className="category-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="category-nav">
          <button className="nav-arrow" aria-label="Previous"><ArrowLeft /></button>
          <button className="nav-arrow" aria-label="Next"><ArrowRight /></button>
        </div>
      </div>
      <div className={`category-grid ${isVertical ? 'vertical-grid' : ''}`}>
        {images.map((img, index) => (
          <div key={index} className="grid-image-container">
            {/* Replace with actual <img> tag when you have assets */}
            <div className="image-placeholder">Image {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Portfolio() {
  // Sample data for the categories
  const categories = [
    {
      title: "Print media",
      description: "From brochures and flyers to posters, menus, and marketing collateral, we create print materials that communicate clearly while leaving a lasting impression.",
      images: [1, 2, 3]
    },
    {
      title: "Packaging",
      description: "Packaging solutions that balance aesthetics, functionality, and shelf impact, helping products stand out while reinforcing the brand story.",
      images: [1, 2, 3]
    },
    {
      title: "Social media",
      description: "Creative content designed to engage audiences, strengthen brand presence, and drive meaningful interactions across digital platforms.",
      images: [1, 2, 3]
    },
    {
      title: "Production",
      description: "High-quality visual storytelling tailored to different communication goals. Professional photography that captures your brand with clarity, creativity, and purpose.",
      images: [1, 2, 3],
      isVertical: true
    },
    {
      title: "Photography",
      description: "Professional photography that captures your brand with clarity, creativity, and purpose.",
      images: [1, 2, 3]
    }
  ];

  return (
    <div className="portfolio-page">
      
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="subtitle-blue">OUR WORK</span>
          <h1>Our Recent Projects</h1>
          <p>Every project is an opportunity to solve a problem, build<br/>a brand, and create meaningful digital experiences.<br/>Here's a selection of our recent work.</p>
        </div>

        <div className="scroll-indicator">
          <span>Explore Our Work</span>
          <ArrowDown />
        </div>
      </section>

      {/* 2. INTRO & BRAND IDENTITY */}
      <div className="container">
        <section className="showcase-intro">
          <span className="subtitle-blue">LATEST WORKS</span>
          <h2>Creative Showcase</h2>
          <p>Explore a curated collection of work where creativity meets strategy. Every project is thoughtfully<br/>crafted to solve business challenges, build memorable brands, and create meaningful experiences<br/>across digital and print.</p>
        </section>

        <section className="brand-identity-feature">
          <div className="feature-image">
             {/* Replace with actual image */}
             <div className="image-placeholder">Brand Identity Image</div>
          </div>
          <div className="feature-content">
            <h2>Brand Identity</h2>
            <p>Strategic brand identities that build recognition, trust, and lasting<br/>connections through distinctive visual systems, consistent messaging<br/>and purposeful design.</p>
            <Link to="/contact" className="btn-talk btn-solid-talk-dark">
              View All Projects <ArrowRight />
            </Link>
          </div>
        </section>

        {/* 3. CATEGORY GRIDS */}
        {categories.map((cat, index) => (
          <CategorySection 
            key={index} 
            title={cat.title} 
            description={cat.description} 
            images={cat.images}
            isVertical={cat.isVertical}
          />
        ))}
      </div>

      {/* 4. CALL TO ACTION */}
      <section className="portfolio-cta-section">
        <span className="subtitle-blue">HAVE A PROJECT IN MIND ?</span>
        <h2>Ready to Build<br/>Something Amazing?</h2>
        <p>Whether you're launching a startup, scaling your business, or refreshing your brand,<br/>we're here to create meaningful experiences that leave a lasting impression.</p>
        <Link to="/contact" className="btn-outline-dark">
          Start Your Project <ArrowRight />
        </Link>
      </section>

    </div>
  );
}