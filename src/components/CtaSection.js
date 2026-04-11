import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/CtaSection.css';
import balloon1 from '../images/balloonYellowFrill.png';
import balloon2 from '../images/balloonRed.png';
import balloon3 from '../images/balloonBlueRed.png';

export default function CtaSection({ onCtaClick }) {
  const sectionRef = useRef(null);
  const farRef     = useRef(null);
  const midRef     = useRef(null);
  const nearRef    = useRef(null);

  // Parallax on scroll — each layer moves at a different speed
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect   = section.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = window.innerHeight / 2 - center;

      if (farRef.current)
        farRef.current.style.transform  = `translateY(${offset * 0.08}px) rotate(-1.5deg)`;
      if (midRef.current)
        midRef.current.style.transform  = `translateY(${offset * 0.17}px) rotate(1deg)`;
      if (nearRef.current)
        nearRef.current.style.transform = `translateY(${offset * 0.28}px) rotate(-1deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="cta" ref={sectionRef}>

      {/* Far balloon — small, left, slow */}
      <div className="cta__balloon cta__balloon--far" ref={farRef}>
        <img src={balloon1} alt="" aria-hidden="true" />
      </div>

      {/* Mid balloon — medium, right */}
      <div className="cta__balloon cta__balloon--mid" ref={midRef}>
        <img src={balloon2} alt="" aria-hidden="true" />
      </div>

      {/* Near balloon — large, front-left */}
      <div className="cta__balloon cta__balloon--near" ref={nearRef}>
        <img src={balloon3} alt="" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="cta__content">
        <p className="cta__eyebrow">Begin your journey</p>
        <h2 className="cta__heading">Ready to begin your naming journey?</h2>
        <p className="cta__text">
          Let us help you discover the perfect name for your little one.
        </p>
        <button className="cta__btn" onClick={onCtaClick}>
          Start Your Journey
          <ArrowRight size={16} />
        </button>
      </div>

    </section>
  );
}