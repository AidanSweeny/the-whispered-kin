import React, { useState, useEffect } from 'react';
import '../styles/Intro.css';

const Intro = ({ onComplete }) => {
  const [showWriting, setShowWriting] = useState(false);
  const [isWritingComplete, setIsWritingComplete] = useState(false);

  useEffect(() => {
    // Show the writing animation after a brief delay
    const timer = setTimeout(() => {
      setShowWriting(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWriting) {
      // Animation duration is 3.5s, then wait 1s before transitioning
      const timer = setTimeout(() => {
        setIsWritingComplete(true);
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, [showWriting]);

  useEffect(() => {
    if (isWritingComplete) {
      // Transition to main page after 1s of holding the position
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isWritingComplete, onComplete]);

  return (
    <div className={`intro-container ${isWritingComplete ? 'intro-complete' : ''}`}>
      <div className="intro-content">
        {/* Logo */}
        <div className="intro-logo">
          <img src="/tree-logo.png" alt="The Whispered Kin" className="intro-tree-logo" />
        </div>

        {/* Animated Writing Text */}
        {showWriting && (
          <div className={`intro-text-wrapper ${isWritingComplete ? 'intro-text-wrapper-animated' : ''}`}>
            <h1 className="intro-title">The Whispered Kin</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Intro;
