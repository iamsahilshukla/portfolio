import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="contact-content">
            <div className="contact-header">
              <i className="fas fa-handshake" style={{ fontSize: '3rem', color: '#ffffff', marginBottom: '1rem' }}></i>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ffffff' }}>Ready to Collaborate?</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cccccc', lineHeight: '1.6' }}>
                Interested in working together or want to discuss potential opportunities? 
                I'm always open to new challenges and exciting projects!
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:iamsahilshukla@gmail.com">iamsahilshukla@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918299183395">+91 82991 83395</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="mailto:iamsahilshukla@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/sahil-shukla" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/iamsahilshukla" title="GitHub" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="tel:+918299183395" title="Phone">
                <i className="fas fa-phone"></i>
              </a>
            </div>
            
            <div className="contact-cta">
              <button className="btn btn-primary" onClick={() => window.open('mailto:iamsahilshukla@gmail.com')}>
                <i className="fas fa-paper-plane"></i>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 