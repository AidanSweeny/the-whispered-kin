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
              Names have been a subject of conversation in my family for as long as I can remember.
              My mother, who has always given these things a great deal of thought, chose each of our names carefully. They have a particular shape and weight to them, and a particular rhythm, which she always thought makes a name more beautiful. Our names come from the same family of names, and she loves how they belong together.
              Our middle names carry their own little history: the flowers from my parents’ wedding day, the turn of the millennium, and the names of loved ones that have been carried forward.

            </p>
            <p className="about-me-bio">
             I have grown up knowing that my name was chosen with intention. It is balanced, strong and distinctive.
              Names came up in all sorts of parts of my life: in conversations with close friends, on long flights with strangers, and in the homes of families whose children I have cared for over the years. A simple question about a name always leads me somewhere — to family stories, memories, places, languages, traditions, and the people who have shaped them. I have grown up knowing that names are not just words, but a reflection of the people and stories they belong to.
            </p>
            <p className="about-me-bio">
            The Whispered Kin grew from that lifelong conversation. I have come to believe that choosing a name is rarely just a matter of finding one you like. Names carry associations, memories and connections, and sometimes the right one emerges from a story you already know, or from something you sense about the person who is about to join it. It can hold something of where a family has come from, while also leaving room for the person that child will become. The Whispered Kin is a place to explore those possibilities and find a name that feels right for your family.




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
