import { useEffect, useRef, useState } from 'react';
import '../styles/SubtitleBar.css';

const LINES = [
  { text: "A personal approach to baby naming",                style: 'primary' },
  { text: "Choosing a name is one of the first and most personal decisions we make for a child. Inspiration can come from anywhere; a cherished memory, a beautiful meaning, a particular sound, or something entirely unexpected. At The Whispered Kin, I offer a thoughtful and individual approach to baby naming, taking the time to understand your preferences, explore the possibilities and guide you towards a name that feels both meaningful and entirely your own.", style: 'accent' },
];

const SubtitleBar = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const barRef = useRef(null);
  const timersRef = useRef([]);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          LINES.forEach((_, i) => {
            const t = setTimeout(() => {
              setVisibleCount((prev) => Math.max(prev, i + 1));
            }, i * 380);
            timersRef.current.push(t);
          });
          const photoTimer = setTimeout(() => {
          }, LINES.length * 380 + 400);
          timersRef.current.push(photoTimer);
        } else {
          timersRef.current.forEach(clearTimeout);
          timersRef.current = [];
          setVisibleCount(0);
        }
      },
      { threshold: 0.25 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="parallax-subtitle-bar" ref={barRef}>
        <div className='subtitle-container'>
        <div className="subtitle-lines">
            {LINES.map((line, i) => (
            <p
                key={i}
                className={`subtitle-line subtitle-line--${line.style} ${i < visibleCount ? 'visible' : ''}`}
            >
                {line.text}
            </p>
            ))}
        </div>
    </div>
    </div>
  );
};

export default SubtitleBar;