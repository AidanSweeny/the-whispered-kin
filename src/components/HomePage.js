import React, { useEffect, useRef, useState } from 'react';
import '../styles/HomePage.css';
import Start from './Start';
import Header from './Header';
import balloon1 from '../images/balloonBlueFlag.png';
import balloon2 from '../images/balloonBlue.png';
import balloon3 from '../images/balloonMoon.png';
import balloon4 from '../images/balloonPlain.png';
import balloon5 from '../images/balloonRainbow.png';
import balloon6 from '../images/balloonRedFlagpng.png';
import balloon7 from '../images/balloonYellowFrill.png';
import balloon8 from '../images/balloonYellow.png';
import balloon9 from '../images/balloonRed.png';
import balloon10 from '../images/balloonBlueRed.png';
import SubtitleBar from './SubtitleBar';
import Services from './Services';
import CtaSection from './CtaSection';
import { AboutSection } from './AboutSection';


const HomePage = ({ setCurrentPage }) => {
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
          <p className="parallax-title">Welcome</p>
          <hr/>
        </div>
          <div>
          <SubtitleBar />
          </div>
        <div className="parallax-gallery">

          {/* Balloons BEHIND the text (zIndex < 10) */}
          {[
            { top: '30%', left: '18%', size: 140, image: balloon1,   speed: -4, hideMobile: true },
            { top: '-30%', left: '8%',  size: 200, image: balloon2,  speed: 6,  hideMobile: false  },
            { top: '10%', left: '40%', size: 160, image: balloon3,  speed: 6,   hideMobile: false  },
            { top: '-10%', left: '72%', size: 350, image: balloon4,  speed: 8,  hideMobile: false },
          ].map((b, i) => (
            <img
              key={`back-${i}`}
              src={b.image}
              alt=""
              className={`balloon-img${b.hideMobile ? ' balloon-hide-mobile' : ''}`}
              style={{
                top: b.top,
                left: b.left,
                width: b.size,
                transform: `translateY(${parallaxOffsets[b.speed] ?? 0}px)`,
                zIndex: 2,
              }}
            />
          ))}

          {/* Floating centre text */}
          <div className="parallax-float-text">
            A place where names drift gently into view
          </div>

          {/* Balloons IN FRONT of the text (zIndex > 10) */}
          {[
            { top: '32%',  left: '5%',  size: 280, image: balloon5,   speed: 4,  hideMobile: true },
            { top: '15%', left: '38%', size: 170, image: balloon6,   speed: 10, hideMobile: true  },
            { top: '20%', left: '50%', size: 210, image: balloon7,   speed: 3,  hideMobile: true  },
            { top: '-5%', left: '30%', size: 145, image: balloon8,   speed: 5,  hideMobile: true  },
            { top: '20%', left: '82%', size: 190, image: balloon9,   speed: 7,  hideMobile: true },
            { top: '60%', left: '55%', size: 260, image: balloon10,  speed: 9,  hideMobile: true  },
          ].map((b, i) => (
            <img
              key={`front-${i}`}
              src={b.image}
              alt=""
              className={`balloon-img${b.hideMobile ? ' balloon-hide-mobile' : ''}`}
              style={{
                top: b.top,
                left: b.left,
                width: b.size,
                transform: `translateY(${parallaxOffsets[b.speed] ?? 0}px)`,
                zIndex: 20,
              }}
            />
          ))}

        </div>
      </section>
      <AboutSection/>
      <Services/>
      <CtaSection onCtaClick={() => setCurrentPage('form')} />

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