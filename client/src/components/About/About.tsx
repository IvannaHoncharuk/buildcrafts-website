import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import './About.scss';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We maintain the highest standards in every project'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of experience'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver on schedule'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About BuildCraft</h2>
            <p className="section-subtitle">
              Building excellence since 2009, we are a premier construction company 
              committed to delivering exceptional results.
            </p>
            
            <div className="about-description">
              <p>
                With over 15 years of experience in the construction industry, BuildCraft 
                has established itself as a trusted partner for residential and commercial 
                construction projects. Our commitment to quality, innovation, and customer 
                satisfaction has earned us recognition as one of the region's leading 
                construction companies.
              </p>
              
              <p>
                We specialize in modern construction techniques, sustainable building 
                practices, and cutting-edge technology to deliver projects that exceed 
                expectations. From concept to completion, we work closely with our clients 
                to bring their vision to life.
              </p>
            </div>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Construction team at work"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>15+ Years</h3>
                  <p>Building Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;