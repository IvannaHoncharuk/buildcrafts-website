import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import './Projects.scss';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Beverly Hills, CA',
      year: '2023',
      description: 'A stunning contemporary villa featuring open-plan living, premium finishes, and breathtaking views.'
    },
    {
      id: 2,
      title: 'Corporate Office Complex',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Downtown LA',
      year: '2023',
      description: 'State-of-the-art office building with sustainable design and modern amenities.'
    },
    {
      id: 3,
      title: 'Residential Apartment Complex',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Santa Monica, CA',
      year: '2022',
      description: 'Multi-family residential complex with modern amenities and community spaces.'
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Orange County',
      year: '2022',
      description: 'Contemporary retail space designed for optimal customer experience and merchant success.'
    },
    {
      id: 5,
      title: 'Custom Family Home',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Pasadena, CA',
      year: '2023',
      description: 'Traditional craftsman-style home with modern updates and energy-efficient features.'
    },
    {
      id: 6,
      title: 'Historic Building Renovation',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      location: 'Hollywood, CA',
      year: '2022',
      description: 'Careful restoration of a historic building while preserving its architectural integrity.'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'renovation', label: 'Renovation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Explore our portfolio of successful construction projects
        </p>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;