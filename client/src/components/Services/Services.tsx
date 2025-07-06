import React from 'react';
import { Home, Building, Wrench, PaintBucket, Zap, TreePine } from 'lucide-react';
import './Services.scss';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential projects tailored to your lifestyle and budget.',
      features: ['Custom Home Design', 'Kitchen & Bath Remodeling', 'Home Additions', 'Interior Renovations']
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Professional commercial buildings, offices, and retail spaces built to industry standards.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Mixed-Use Developments']
    },
    {
      icon: Wrench,
      title: 'General Contracting',
      description: 'Full-service project management from planning to completion with expert coordination.',
      features: ['Project Management', 'Permit Handling', 'Quality Control', 'Timeline Management']
    },
    {
      icon: PaintBucket,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our comprehensive renovation and remodeling services.',
      features: ['Complete Renovations', 'Room Additions', 'Basement Finishing', 'Exterior Upgrades']
    },
    {
      icon: Zap,
      title: 'Electrical & Plumbing',
      description: 'Professional electrical and plumbing services for all your construction needs.',
      features: ['Electrical Installation', 'Plumbing Systems', 'HVAC Integration', 'Smart Home Systems']
    },
    {
      icon: TreePine,
      title: 'Landscaping & Outdoor',
      description: 'Complete outdoor solutions including landscaping, decks, and outdoor living spaces.',
      features: ['Landscape Design', 'Deck Construction', 'Outdoor Kitchens', 'Hardscaping']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive construction solutions for all your building needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="service-cta">
                <a href="#contact" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;