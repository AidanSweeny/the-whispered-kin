import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Heart, Sparkles, ArrowRight } from 'lucide-react';
import '../styles/HomePage.css';
import Start from './Start';
import Header from './Header';
import Picture1 from '../images/Picture1.png';
import Picture2 from '../images/Picture2.png';
import Picture3 from '../images/Picture3.png';
import Picture4 from '../images/Picture4.png'; 
import Picture5 from '../images/Picture5.avif'; 
import Picture6 from '../images/Picture6.webp'; 
import Picture7 from '../images/Picture7.jpg'; 
import Picture8 from '../images/Picture8.jpg';
import Picture9 from '../images/Picture9.webp'; 


const HomePage = ({ setCurrentPage }) => {
  const servicesRef = useRef(null);
  const timelineRef = useRef(null);
  const parallaxContainerRef = useRef(null);
  const [parallaxOffsets, setParallaxOffsets] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const whyRef = useRef(null); // for fade-in of why items

  useEffect(() => {
    if (!timelineRef.current) return;

    const blurbs = Array.from(timelineRef.current.querySelectorAll('.blurb'));
    const timelineLine = timelineRef.current.querySelector('.timeline-line');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // animate blurbs sequentially
          blurbs.forEach((el, idx) => {
            const t1 = setTimeout(() => {
              el.classList.add('expand');
              const t2 = setTimeout(() => el.classList.add('show-text'), 800);
              timers.push(t2);
            }, idx * 600);
            timers.push(t1);
          });
          // also animate line if present
          if (timelineLine) timelineLine.classList.add('fade-in');
        } else {
          // reset
          blurbs.forEach((el) => {
            el.classList.remove('expand', 'show-text');
          });
          if (timelineLine) timelineLine.classList.remove('fade-in');
        }
      });
    }, { threshold: 0.35 });

    const timers = [];
    observer.observe(timelineRef.current);

    return () => {
      observer.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Intersection observer for why-items fade
  useEffect(() => {
    if (!whyRef.current) return;
    const items = Array.from(whyRef.current.querySelectorAll('.why-item'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxContainerRef.current) return;

      const containerRect = parallaxContainerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Only calculate parallax when container is in view
      if (containerTop < windowHeight && containerTop + containerHeight > 0) {
        // Calculate scroll progress relative to container (0 to 1)
        const scrollProgress = Math.max(0, (windowHeight - containerTop) / (windowHeight + containerHeight));

        const speeds = [0.8, 3.0, 0.3, 1.5, 0.6, 0.9, 1.5, 2.5, 0.7, 1.3];
        const newOffsets = speeds.map((speed) => scrollProgress * 400 * speed);
        setParallaxOffsets(newOffsets);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="home-page">
      {/* Header */}
      {/* <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-icon">
              <img src="/tree-logo.png" alt="The Whispered Kin" className="tree-logo" />
            </div>
            <h1 className="site-title">The Whispered Kin</h1>
          </div>
        </div>
      </header> */}

      {/* Content sits above ::before background */}
      <div style={{ position: 'relative', zIndex: 1 }}>

      {/* Sticky nav header */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Hero Section moved to Start component */}
      <Start />

      {/* Parallax Gallery Section */}
      <section className="parallax-section" ref={parallaxContainerRef}>
              {/* <Divider /> */}

        <div className="parallax-title-bar">
          {/* <p className="parallax-title">Welcome</p> */}
          <div className="logo-icon">
              <img src="/tree-logo.png" alt="The Whispered Kin" className="tree-logo" />
            </div>
          <p className="parallax-title">Welcome to The Whispered Kin</p>
          {/* <p className="parallax-title">A quiet, thoughtful space for families seeking a name that truly belongs</p> */}
          <hr/>
          <p className="parallax-subtitle"> A bespoke baby-naming consultancy devoted to story-rich, meaningful names. We work closely with families to understand their values, heritage, and hopes, to find a name that truly belongs.</p>
        </div>
        <div className="parallax-gallery">
          {[
            { id: 0, frameType: 'green', size: 'medium', top: '10%', left: '5%', picture: Picture8},
            { id: 1, frameType: 'green', size: 'large', top: '-20%', left: '40%' , words: "We listen deeply to your family story, values, and instincts"},
            { id: 2, frameType: 'green', size: 'small', top: '35%', left: '15%' , words: "We focus on story and feeling"},
            { id: 3, frameType: 'green', size: 'small', top: '50%', left: '70%' , picture: Picture9},
            { id: 4, frameType: 'green', size: 'medium', top: '20%', left: '75%', words: "We work quietly and personally" },
            { id: 5, frameType: 'green', size: 'landscape', top: '45%', left: '5%' , picture: Picture6},
            { id: 6, frameType: 'green', size: 'small', top: '-15%', left: '25%' , words: "5"},
            { id: 7, frameType: 'green', size: 'small', top: '-25%', left: '60%' , picture: Picture7},
            { id: 8, frameType: 'green', size: 'medium', top: '60%', left: '55%', words: "6"},
            { id: 9, frameType: 'green', size: 'small', top: '-10%', left: '80%' , words: "7"},
          ].map((frame, idx) => (
            <div
              key={idx}
              className={`parallax-frame frame-${frame.frameType} frame-${frame.size}`}
              style={{ 
                transform: `translateY(${parallaxOffsets[idx]}px)`,
                top: frame.top,
                left: frame.left,
              }}
            >
              {frame.picture ? 
              <div className="frame-content">
                <img src={frame.picture} alt={`Frame ${idx}`} className="frame-image" />
              </div> : 
              <div className="frame-content">
                <p>{frame.words}</p>
              </div>}
            </div>
          ))}
        </div>
      </section>

      {/* Services / Why Section */}
      <section className="services-section" ref={servicesRef}>
        <div className="why-items" ref={whyRef}>
          {[
            { title: 'Personalized Care', text: 'We listen closely to your story and preferences to find a name that resonates. Our research covers etymology, heritage, and significance from around the world.' },
            { title: 'Cultural Depth', text: 'Our research covers etymology, heritage, and significance from around the world. Our research covers etymology, heritage, and significance from around the world.' },
            { title: 'Lasting Connection', text: 'The right name becomes a lifelong gift, rooted in meaning and love. The right name becomes a lifelong gift, rooted in meaning and love. The right name becomes a lifelong gift, rooted in meaning and love.' },
          ].map((item, idx) => (
            <div key={idx} className={`why-item ${idx % 2 === 1 ? 'reverse' : ''}`}>
              <h3 className="why-item-title">{item.title}</h3>
              <p className="why-item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="cta-container">
      <img src="/tree-logo.png" alt="The Whispered Kin" className="tree-logo-big" />
      <h4 className="cta-title">Ready to begin your naming journey?</h4>
      <div className="cta-section">
        <h3 className="cta-title">Plan A</h3>
        <p className="cta-text">
          Let us help you discover the perfect name for your little one. Share your preferences, 
          and we'll craft a personalized selection just for you.
        </p>
        <button
          onClick={() => setCurrentPage('form')}
          className="cta-button"
        >
          Start Your Journey
          <ArrowRight className="button-icon" />
        </button>
      </div>
      <div className="cta-section">
        <h3 className="cta-title">Plan B</h3>
        <p className="cta-text">
          Let us help you discover the perfect name for your little one. Share your preferences, 
          and we'll craft a personalized selection just for you.
        </p>
        <button
          onClick={() => setCurrentPage('form')}
          className="cta-button"
        >
          Start Your Journey
          <ArrowRight className="button-icon" />
        </button>
      </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 The Whispered Kin. Nurturing names, honoring heritage.</p>
        </div>
      </footer>
      </div>{/* end content z-index wrapper */}
    </div>
  </div>
  );
};

export default HomePage;