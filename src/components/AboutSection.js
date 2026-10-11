import '../styles/AboutSection.css';
import Picture1 from '../images/slideshow1.jpg';
import Picture2 from '../images/slideshow2.jpg';
import Picture3 from '../images/slideshow3.jpg';
import Picture4 from '../images/slideshow4.jpg'; 
import Picture5 from '../images/slideshow5.jpg';
import { useEffect, useRef, useState } from 'react';

const LINES = [
  { text: "My Philosophy",                                                                          className: "about-title" },
  { text: "I believe that choosing a name deeply personal experience, guided by individuality, instinct and the things we hold dear. Inspiration can take many forms, from family connections and cultural traditions to the beauty of a particular sound, an unexpected discovery or simply a name that feels right. There is no single path to finding the perfect name, and it is this individuality that lies at the heart of The Whispered Kin.", className: "about-info" },
  { text: "My approach begins with listening and understanding what matters most to you. Through thoughful conversation, careful research and genuine appreciation of names in all their forms, I explore possibilities that reflect your personal tastes and aspirations. Drawing on history, linguistics and culture, alongside creativity and intuition, i aim to make the process of finding a name both considered and enjoyable", className: "about-info" },
  { text: "Whether your preferences lean towards timeless or contemporary, the familiar or the unexpected, my belief remains the same: a name should feel natural, meaningful to you and suited to the person who will carry it. Above all, I believe that choosing a name should be a thoughtful and rewarding experience, one that leaves you feeling confident in a decision that will last a lifetime.", className: "about-info" },
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
    }, [photos.length]);

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