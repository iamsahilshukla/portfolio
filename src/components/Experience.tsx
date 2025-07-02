import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience: React.FC = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.experience-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "LearnApp (Varsity Live by Zerodha)",
      duration: "Dec 2023 - Present",
      location: "India",
      description: "LearnApp delivers live, interactive finance education in partnership with Zerodha Varsity Live.",
      achievements: [
        "Built scalable event-driven architecture using AWS EventBridge to track real-time user activity for 5,000+ concurrent users during Zerodha Varsity Live",
        "Scaled serverless application using API Gateway WebSocket and Serverless Framework to support 4,000+ concurrent users with DynamoDB warm throughput management",
        "Developed scalable ticket and notification management system for iOS and Android using Firebase for large-scale finance events",
        "Led 4-person development team to build end-to-end Fest application from mobile app (iOS & Android) to backend",
        "Implemented RAG-based service using LangChain, LangGraph, and Pinecone Vector DB for YouTube content interaction"
      ],
      technologies: ["AWS EventBridge", "Lambda", "DynamoDB", "WebSocket", "Firebase", "LangChain", "Pinecone", "Serverless"]
    },
    {
      title: "SDE-1",
      company: "MonkTechLabs",
      duration: "Apr 2023 - Nov 2023",
      location: "India",
      description: "Proptech company managing commercial and residential apartments, malls, and offices with full automation.",
      achievements: [
        "Optimized company architecture achieving 80% performance improvement through MongoDB query optimization and critical key indexing",
        "Implemented Redis caching mechanism for enhanced user experience and system performance",
        "Conducted comprehensive load testing on monolithic system, identified scalability issues, and made APIs scalable",
        "Developed AWS Lambda functions for CRM data synchronization between system and ZohoCRM",
        "Optimized Mongoose indexing and queries for better database performance and maintainable code"
      ],
      technologies: ["MongoDB", "Redis", "AWS Lambda", "Mongoose", "Node.js", "Load Testing"]
    },
    {
      title: "Backend Developer (TPA-1)",
      company: "Juspay (FinTech)",
      duration: "Apr 2021 - Apr 2023",
      location: "India",
      description: "Juspay's vision is to enable billion people in India with secure 1-Click payments on Mobile.",
      achievements: [
        "Developed applications using Haskell and PureScript functional programming languages",
        "Handled API calls and integrations with multiple lenders for payment processing",
        "Used analytics to identify and address performance bottlenecks in payment systems",
        "Developed new features and optimized existing code to improve application scalability",
        "Contributed to mission-critical payment infrastructure serving millions of users"
      ],
      technologies: ["Haskell", "PureScript", "Functional Programming", "API Integration", "Analytics"]
    }
  ];

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item animate-on-scroll">
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <span className="company">{exp.company}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{exp.duration}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                
                <div className="experience-content">
                  <p className="company-description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h4>Key Achievements & Impact:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies & Tools:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-highlight card animate-on-scroll">
          <h3>Career Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <i className="fas fa-users"></i>
              <h4>Team Leadership</h4>
              <p>Led 4-person development team delivering end-to-end solutions</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-tachometer-alt"></i>
              <h4>Performance Optimization</h4>
              <p>Achieved 80% performance improvement through system optimization</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-rocket"></i>
              <h4>Scalability</h4>
              <p>Built systems supporting 5,000+ concurrent users</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-brain"></i>
              <h4>AI Integration</h4>
              <p>Implemented RAG-based services with modern AI technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 