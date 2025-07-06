import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import axios from 'axios';
import './Contact.scss';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await axios.post('http://localhost:5000/api/contact', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@buildcraft.com',
      link: 'mailto:info@buildcraft.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Construction Ave, Los Angeles, CA 90028',
      link: 'https://maps.google.com/?q=123+Construction+Ave,+Los+Angeles,+CA+90028'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 8AM-6PM\nSat: 9AM-4PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your construction project? Let's discuss your vision.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-details">
                    <h3 className="contact-title">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.content}
                      </a>
                    ) : (
                      <p className="contact-text">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="contact-cta">
              <h3>Ready to Build?</h3>
              <p>
                Get a free consultation and estimate for your project. 
                Our team is ready to help bring your vision to life.
              </p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;