import Header from './Header';
import '../styles/AboutMePage.css';
import aboutPhoto from '../images/slideshow1.jpg';

export default function AboutMePage({ setCurrentPage }) {
  return (
    <div className="about-me-page">
      <Header setCurrentPage={setCurrentPage} alwaysVisible />

      <main className="about-me-main">
        <div className="about-me-inner">

          {/* Photo */}
          <div className="about-me-photo-wrap">
            <img src={aboutPhoto} alt="Portrait" className="about-me-photo" />
          </div>

          {/* Text */}
          <div className="about-me-content">
            <p className="about-me-eyebrow">About</p>
            <h1 className="about-me-name">Cassia Pickard</h1>
            <p className="about-me-role">Founder &amp; Naming Consultant</p>
            <hr className="about-me-rule" />
            <p className="about-me-bio">
              Replace this with your own story. Share what drew you to the world of names,
              your background, and what makes your approach to baby naming unique. This is
              your space to connect with families before they even reach out — let them
              feel the warmth and care you bring to every consultation.
            </p>
            <p className="about-me-bio">
              A second paragraph works well here. You might speak to your experience,
              your own family, or the philosophy behind The Whispered Kin — the belief
              that the right name is rarely chosen from a list, but recognised.
            </p>
            <button
              className="about-me-btn"
              onClick={() => setCurrentPage('form')}
            >
              Start Your Journey
            </button>
          </div>

        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 The Whispered Kin. Nurturing names, honoring heritage.</p>
        </div>
      </footer>
    </div>
  );
}
