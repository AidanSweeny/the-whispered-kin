import Header from './Header';
import '../styles/AboutMePage.css';
import aboutPhoto from '../images/slideshow1.jpg';

export default function AboutMePage({ setCurrentPage }) {
  return (
    <div className="about-me-page">
      <Header setCurrentPage={setCurrentPage} alwaysVisible />

      <button className="page-back-btn" onClick={() => setCurrentPage('home')}>← Back</button>

      <main className="about-me-main">
        <div className="about-me-border">
        <div className="about-me-inner">

          {/* Photo */}
          <div className="about-me-photo-wrap">
            <img src={aboutPhoto} alt="Portrait" className="about-me-photo" />
          </div>

          {/* Text */}
          <div className="about-me-content">
            <p className="about-me-eyebrow">About</p>
            <h1 className="about-me-name">Cassia</h1>
            <p className="about-me-role">Founder &amp; Naming Consultant</p>
            <hr className="about-me-rule" />
            <p className="about-me-bio">
              Names have been a lifelong fascination — one shaped from an early age by an exceptional attention to detail and meaning.
              </p>
            <p className="about-me-bio">

Growing up, naming was never treated as an afterthought. My mother approached it with remarkable care, intention, and precision. When naming me and my siblings, every element was considered. Each name was six letters long, each included an “i” and an “a” — letters she felt created a sense of beauty and balance. Our names were quietly connected through biblical siblings, and our middle names were equally intentional: inspired by the flowers from my parents’ wedding day, the millennium in which we were born, and family members who hold deep significance to us.

The result was something far greater than a collection of names. They became part of who we are — balanced, distinctive, meaningful, and enduring. Names we have always been proud to carry.
</p>
            <p className="about-me-bio">

That foundation shaped a natural instinct. I have always been drawn to the nuance of names — how they sound, how they feel, and what they communicate. Whether speaking with friends, strangers, or families I’ve worked closely with, the conversation often returns to names. Time and again, I’ve seen how much weight they hold — and how powerful it is to find the right one.

This is what led me to establish my naming consultancy.
</p>
            <p className="about-me-bio">

I believe naming is both an art and a discipline — one that requires sensitivity, creativity, and discernment. A truly exceptional name feels effortless, yet is the result of careful thought, deep consideration, and an understanding of meaning, rhythm, and identity.
</p>
            <p className="about-me-bio">

My approach is highly considered and deeply personal. Each name is crafted with intention — designed not only to stand out, but to resonate, to endure, and to feel inherently right.
</p>
            <p className="about-me-bio">

Because the right name doesn’t just fit — it defines.
            </p>
            <button
              className="about-me-btn"
              onClick={() => setCurrentPage('form')}
            >
              Start Your Journey
            </button>
          </div>
        </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 The Whispered Kin. Nurturing names, honoring heritage.</p>
          <p className="footer-text"><a href="mailto:cassia@thewhisperedkin.com" style={{ color: 'inherit', textDecoration: 'underline' }}>cassia@thewhisperedkin.com</a></p>
          <p className="footer-text"><a href="https://www.instagram.com/thewhisperedkin" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@thewhisperedkin</a></p>
        </div>
      </footer>
    </div>
  );
}
