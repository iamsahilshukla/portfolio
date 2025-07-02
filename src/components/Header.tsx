import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Backend Engineer', 'Cloud Architect', 'Node.js Expert','AWS Specialist' , 'System Designer'];
  const currentWord = words[currentIndex];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
      if (isDeleting) {
        setTypedText(prev => prev.slice(0, -1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWord, currentIndex, words.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">
            <h2>Sahil Shukla</h2>
          </div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>
      
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sahil Shukla</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Proactive and skilled software engineer with 4 years of experience building 
              mission-critical applications at scale. Expert in Node.js, TypeScript, and AWS 
              services. I architect scalable systems, optimize performance, and lead teams to 
              deliver high-impact solutions for millions of users.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('experience')}
              >
                <i className="fas fa-briefcase"></i>
                View Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 