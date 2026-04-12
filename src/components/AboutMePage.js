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
              Names have been a topic of conversation for my family for as long as I can remember.
              My mother — whose thought and care for such things is, I think, genuinely
              second to none — gave each of her children a name that was both considered
              and deeply felt. We all have six letters. We each carry an <em>i</em> and
              an <em>a</em>, which she has always believed make a name prettier to the
              eye and the ear. We are siblings in the Bible, give or take the translation.
              Our middle names hold the flowers from my parents' wedding day, the turn of
              the millennium, and the people in our family who meant too much to be
              forgotten.
            </p>
            <p className="about-me-bio">
              I grew up knowing that my name was not chosen lightly. It was balanced,
              strong, distinctive — and it meant something, not just in origin, but in
              the story of where I came from. That knowledge settled something in me early,
              and it never quite left. Names followed me into every corner of my life:
              conversations with close friends, long flights with strangers who happened
              to ask the right question, the homes of families whose children I spent years
              caring for. Wherever I went, I found my way back to them.
            </p>
            <p className="about-me-bio">
              The Whispered Kin grew from that lifelong conversation. I believe the right
              name is rarely chosen from a list — it is recognised. It is already somewhere
              in the story of your family, waiting for the right moment and the right
              person to help you hear it. That is what I am here for.
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
