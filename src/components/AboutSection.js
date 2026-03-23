import '../styles/AboutSection.css';
import Picture1 from '../images/slideshow1.jpg';
import Picture2 from '../images/slideshow2.jpg';
import Picture3 from '../images/slideshow3.jpg';
import Picture4 from '../images/slideshow4.jpg'; 
import Picture5 from '../images/slideshow5.jpg';
import { useEffect, useRef, useState } from 'react';

const LINES = [
  { text: "Our Philosophy",                                                                          className: "about-title" },
  { text: "Trust · Family · Heritage",                                                         className: "about-tags" },
  { text: "At The Whispered kin, we belive the right name is rarely chosen from a list - it is recongised. Our work is rooted in listenong; to family stories, to heritage and language, and by listening to instincts when the space is given. The result is a name that feels natural, meaningful, and deeply connnected to the child you will carry it.", className: "about-info" },
  { text: "Every name carries a story — a thread connecting past, present, and future. We believe that choosing a name is one of the most profound gifts a parent can give.", className: "about-info" },
  { text: "Our consultants draw on history, linguistics, and cultural heritage to guide you toward a name that feels both timeless and entirely your own.", className: "about-info" },
  { text: "Founded on the belief that names matter.",                                          className: "about-info about-info--closing" },
];

export function AboutSection() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [photoVisible, setPhotoVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const sectionRef = useRef(null);
    const timersRef = useRef([]);

    const photos = [
        Picture1, Picture2, Picture3, Picture4, Picture5,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % photos.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
                        setPhotoVisible(true);
                    }, LINES.length * 380 + 400);
                    timersRef.current.push(photoTimer);
                } else {
                    timersRef.current.forEach(clearTimeout);
                    timersRef.current = [];
                    setVisibleCount(0);
                    setPhotoVisible(false);
                }
            },
            { threshold: 0.25 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            observer.disconnect();
            timersRef.current.forEach(clearTimeout);
        };
    }, []);

    return (
        <section className="about-section" ref={sectionRef}>
            <div className="about-container">
                <div className="about-text">
                    {LINES.map((line, i) => (
                        <p
                            key={i}
                            className={`about-line ${line.className} ${i < visibleCount ? 'visible' : ''}`}
                        >
                            {line.text}
                        </p>
                    ))}
                </div>
                <div
                    className={`photo-slideshow${photoVisible ? ' visible' : ''}`}
                    style={{ backgroundImage: `url(${photos[index]})` }}
                />
            </div>
        </section>
    );
}