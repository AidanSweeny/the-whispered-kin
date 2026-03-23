import { useEffect, useRef, useState } from 'react';
import '../styles/SubtitleBar.css';

const LINES = [
  { text: "A bespoke baby-naming consultancy",                style: 'primary' },
  { text: "devoted to story-rich, meaningful names",          style: 'primary' },
  { text: "We work closely with families to understand their", style: 'secondary' },
  { text: "values",                                           style: 'accent' },
  { text: "heritage",                                         style: 'accent' },
  { text: "hopes",                                            style: 'accent' },
  { text: "And find a name that truly belongs.",              style: 'closing' },
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