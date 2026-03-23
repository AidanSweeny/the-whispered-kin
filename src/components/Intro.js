import React, { useState, useEffect } from 'react';
import '../styles/Intro.css';
import cloudImg from '../images/cloud.png';
import balloonImg from '../images/balloonBlueRed.png';

const Intro = ({ onComplete }) => {
  const [balloonOut, setBalloonOut] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // balloon drifts out from behind cloud
    const t1 = setTimeout(() => setBalloonOut(true), 400);
    // title fades in after balloon is mostly clear
    const t2 = setTimeout(() => setTitleVisible(true), 1800);
    // begin exit fade
    const t3 = setTimeout(() => setLeaving(true), 4200);
    // notify parent
    const t4 = setTimeout(() => onComplete(), 5400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`intro-container ${leaving ? 'intro-leaving' : ''}`}>
      <div className="intro-scene">

        <div className="intro-sky">
          <img src={cloudImg} alt="" className="intro-cloud" />
          <img
            src={balloonImg}
            alt=""
            className={`intro-balloon ${balloonOut ? 'intro-balloon--out' : ''}`}
          />
        </div>

        <div className={`intro-title-wrap ${titleVisible ? 'visible' : ''}`}>
          <h1 className="intro-title">The Whispered Kin</h1>
        </div>

      </div>
    </div>
  );
};

export default Intro;