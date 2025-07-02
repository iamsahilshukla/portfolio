import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.skill-category, .skills-highlight');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "🔥 Trending & High-Demand",
      skills: [
        { name: "AWS Lambda", icon: "fab fa-aws", level: "Expert" },
        { name: "TypeScript", icon: "fab fa-js-square", level: "Expert" },
        { name: "Node.js", icon: "fab fa-node-js", level: "Expert" },
        { name: "Serverless", icon: "fas fa-cloud", level: "Advanced" },
        { name: "Vector DB (Pinecone)", icon: "fas fa-database", level: "Advanced" },
        { name: "LangChain/LangGraph", icon: "fas fa-brain", level: "Advanced" }
      ]
    },
    {
      title: "⚡ Core Technologies",
      skills: [
        { name: "MongoDB", icon: "fas fa-database", level: "Expert" },
        { name: "PostgreSQL", icon: "fas fa-database", level: "Advanced" },
        { name: "Redis", icon: "fas fa-memory", level: "Advanced" },
        { name: "Express.js", icon: "fas fa-server", level: "Expert" },
        { name: "NestJS", icon: "fas fa-layer-group", level: "Advanced" },
        { name: "GraphQL", icon: "fas fa-project-diagram", level: "Intermediate" }
      ]
    },
    {
      title: "🚀 Cloud & DevOps",
      skills: [
        { name: "AWS EventBridge", icon: "fab fa-aws", level: "Expert" },
        { name: "AWS SQS", icon: "fab fa-aws", level: "Advanced" },
        { name: "AWS DynamoDB", icon: "fab fa-aws", level: "Advanced" },
        { name: "Microservices", icon: "fas fa-cubes", level: "Advanced" },
        { name: "REST APIs", icon: "fas fa-plug", level: "Expert" },
        { name: "Docker", icon: "fab fa-docker", level: "Intermediate" }
      ]
    },
    {
      title: "🛠️ Tools & Practices",
      skills: [
        { name: "Git", icon: "fab fa-git-alt", level: "Expert" },
        { name: "Jest", icon: "fas fa-vial", level: "Advanced" },
        { name: "C/C++", icon: "fas fa-code", level: "Intermediate" },
        { name: "Haskell", icon: "fas fa-lambda", level: "Intermediate" },
        { name: "PureScript", icon: "fas fa-function", level: "Intermediate" }
      ]
    }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card animate-on-scroll">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={skill.icon}></i>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-highlight card animate-on-scroll">
          <h3>Key Achievements & Impact</h3>
          <div className="strengths-grid">
            <div className="strength-item">
              <i className="fas fa-rocket"></i>
              <h4>Scalable Architecture</h4>
              <p>Built event-driven systems serving 5,000+ concurrent users with AWS EventBridge and Lambda</p>
            </div>
            <div className="strength-item">
              <i className="fas fa-tachometer-alt"></i>
              <h4>Performance Optimization</h4>
              <p>Achieved 80% performance improvement through MongoDB optimization and Redis caching</p>
            </div>
            <div className="strength-item">
              <i className="fas fa-users"></i>
              <h4>Team Leadership</h4>
              <p>Led 4-person development team to deliver end-to-end mobile and backend solutions</p>
            </div>
            <div className="strength-item">
              <i className="fas fa-brain"></i>
              <h4>AI/ML Integration</h4>
              <p>Implemented RAG-based services with LangChain, LangGraph, and Pinecone Vector DB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 