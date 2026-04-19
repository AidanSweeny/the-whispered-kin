import { useEffect, useRef, useState } from 'react';
import '../styles/Services.css';

const items = [
  {
    num: '01',
    title: 'Listening First',
    text: 'Every naming journey begins with your story. I listen closely to your family roots, values, and instincts before a single name is spoken.',
    tag: 'For your family',
    accent: '#d4845a',
  },
  {
    num: '02',
    title: 'Thoughtful Research',
    text: 'From ancient traditions to modern literary gems, I explore names across languages, histories, and cultures to uncover those rich in meaning.',
    tag: 'Rich in meaning',
    accent: '#5a8f6e',
  },
  {
    num: '03',
    title: 'A name that belongs',
    text: 'With gentle guidance and reflection of my discoveries, I help you recognise the name that truly belongs to your little one.',
    tag: 'A name for life',
    accent: '#7a6aac',
  },
];

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const timersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // header fades first, then each card staggered
          const totalLines = 1 + items.length;
          for (let i = 0; i < totalLines; i++) {
            const t = setTimeout(() => {
              setVisibleCount((prev) => Math.max(prev, i + 1));
            }, i * 380);
            timersRef.current.push(t);
          }
        } else {
          timersRef.current.forEach(clearTimeout);
          timersRef.current = [];
          setVisibleCount(0);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="svc-c" ref={sectionRef}>
      <div className={`svc-c__header ${visibleCount >= 1 ? 'visible' : ''}`}>
        <h2 className="svc-c__heading">What I bring</h2>
        <em className="svc-c__subheading">to your journey</em>
      </div>

      <div className="svc-c__grid">
        {items.map((item, i) => (
          <div
            key={i}
            className={`svc-c__col ${i < items.length - 1 ? 'svc-c__col--bordered' : ''} ${visibleCount >= i + 2 ? 'visible' : ''}`}
            style={{ '--accent': item.accent, transitionDelay: `${(i + 1) * 80}ms` }}
          >
            <div className="svc-c__rule-row">
              <span className="svc-c__num">{item.num}</span>
              <div className="svc-c__rule" />
            </div>
            <span className="svc-c__tag">{item.tag}</span>
            <h3 className="svc-c__title">{item.title}</h3>
            <p className="svc-c__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}