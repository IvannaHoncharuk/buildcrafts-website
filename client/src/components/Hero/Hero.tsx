import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Building Dreams Into
              <span className="highlight"> Reality</span>
            </h1>
            <p className="hero-subtitle">
              Premium construction services with over 15 years of experience. 
              We transform your vision into exceptional structures that stand the test of time.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight size={18} />
              </a>
              <button className="btn btn-secondary">
                <Play size={18} />
                Watch Video
              </button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;