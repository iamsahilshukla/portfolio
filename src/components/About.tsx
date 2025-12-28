import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.card, .contact-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="card animate-on-scroll">
              <h3><i className="fas fa-user-tie"></i> Professional Summary</h3>
              <p>
                I'm a passionate software engineer with 4+ years of experience architecting and 
                scaling mission-critical applications. My expertise spans from functional programming 
                with Haskell/PureScript to modern cloud-native development with AWS services. 
                I've successfully led teams of 4+ developers, optimized system performance by 80%, 
                and built applications serving 5,000+ concurrent users. My approach combines 
                technical excellence with strategic thinking to deliver high-impact solutions.
              </p>
            </div>
            
            <div className="card animate-on-scroll">
              <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              <div className="education-item">
                <h4>Bachelor of Technology in Computer Science & Engineering</h4>
                <p className="institution">Lovely Professional University (LPU)</p>
                <p className="duration">Aug 2021 – Jul 2022</p>
                <p className="gpa">CGPA: 8.21</p>
              </div>
            </div>
            
            <div className="card animate-on-scroll">
              <h3><i className="fas fa-heart"></i> Core Strengths</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <i className="fas fa-rocket"></i>
                  <span>System Architecture</span>
                </div>
                <div className="interest-item">
                  <i className="fas fa-users"></i>
                  <span>Team Leadership</span>
                </div>
                <div className="interest-item">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Performance Optimization</span>
                </div>
                <div className="interest-item">
                  <i className="fas fa-cloud"></i>
                  <span>Cloud-Native Development</span>
                </div>
                <div className="interest-item">
                  <i className="fas fa-code"></i>
                  <span>Full-Stack Development</span>
                </div>
                <div className="interest-item">
                  <i className="fas fa-puzzle-piece"></i>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-sidebar">
            <div className="card contact-card animate-on-scroll">
              <h3><i className="fas fa-address-book"></i> Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:iamsahilshukla@gmail.com">iamsahilshukla@gmail.com</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+918299183395">+91 82991 83395</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Delhi, India</span>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <a href="https://www.linkedin.com/in/sahil-shukla" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
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