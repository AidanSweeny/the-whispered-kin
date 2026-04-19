import Header from './Header';

const SERVICE_DATA = {
  whisper: {
    tier: 'First Step',
    name: 'The Whisper',
    price: '50',
    tagline: 'A gentle, focused conversation for families who need a little guidance to hear what they already know.',
    heroBg: '#8ab8c8',
    heroText: '#1c3040',
    bodyBg: '#e8f2f5',
    accent: '#3d7890',
    eyebrowColor: '#6a9ab5',
    headerBg: '#bcd4de',
    btnTextColor: '#faf8f4',
    description: [
      'The Whisper is for the family who senses the name — who can almost hear it — but needs a quiet space and a thoughtful companion to bring it fully into view. It begins with my naming questionnaire, taken at your own pace, and leads into a single, unhurried thirty-minute conversation.',
      'In that session, I sit with your answers. I talk through what draws you and what you instinctively turn from. I explore a curated shortlist, chosen with care, and by the end you will leave with something you didn\'t have before: a clearer sense of what the name needs to be.',
    ],
    whatNext: 'Once you submit the questionnaire, I read every answer with care. Within two working days I will write to you with my initial thoughts and suggested times to speak. I will share a curated shortlist in advance of your session, and afterwards send a follow-up email summarising everything covered in your session.',
  },
  journey: {
    tier: 'Most Popular',
    name: 'The Journey',
    price: '200',
    tagline: 'For families who want to explore deeply and arrive at their name with real confidence.',
    heroBg: '#3d2010',
    heroText: '#faf3e8',
    bodyBg: '#f5ede0',
    accent: '#c8a96e',
    eyebrowColor: '#c8a96e',
    headerBg: '#c8a87a',
    btnTextColor: '#2c1810',
    description: [
      ‘The Journey is my most chosen path — for families who know that a name carries weight, and who want to find theirs through real conversation rather than a list. It unfolds across two one-hour sessions, with time between them to reflect, revisit, and let ideas settle.’,
      ‘I begin with my in-depth questionnaire, richer and more searching than the standard form. Between and after your sessions, I am in contact by email. At the end, you receive a beautifully crafted PDF report — your names in full, with their meanings, origins, sibling harmony notes, and my personal reflections.’,
    ],
    whatNext: ‘After you submit the in-depth questionnaire, I review your answers carefully and write to you within two working days with my first impressions and available times for your initial session. I will share a detailed longlist in advance, and after each conversation you will receive an email summary. Your PDF report arrives once the process is complete.’,
    disclaimer: ‘Please note: the questionnaire above is my initial form. Once I\’ve reviewed your responses, I\’ll get back to you with an initial list, next steps, and payment details. I will then send you a more detailed, in-depth questionnaire to complete before your first session.’,
  },
  unfolding: {
    tier: 'Full Service',
    name: 'The Unfolding',
    price: '375',
    tagline: 'Complete accompaniment — from the very first question to the moment the name becomes theirs.',
    heroBg: '#8b1a1a',
    heroText: '#faf8f4',
    bodyBg: '#f5ede0',
    accent: '#8b1a1a',
    eyebrowColor: '#c8a96e',
    headerBg: '#e2c8b4',
    btnTextColor: '#faf8f4',
    description: [
      ‘The Unfolding is for the family who wants to be accompanied through the whole of it — not just the finding, but the feeling, the doubting, and the arriving. There is no fixed end date. I stay with you, through three one-hour sessions and as many emails as the process asks for, until the name is truly decided.’,
      ‘You will have access to a shared, living document — a space where my research, your reflections, and every name considered together are gathered and updated as we go. And at the end, I write you a personal naming letter: the story of how your child\’s name was found, to keep.’,
    ],
    whatNext: ‘Once you submit the questionnaire, I read it with the full attention this path deserves and write to you within two working days. I will suggest times for your first session, share my opening thoughts, and begin building your shared document. From there, I work at whatever pace your family needs — there is no pressure to move faster than feels right.’,
    disclaimer: ‘Please note: the questionnaire above is my initial form. Once I\’ve reviewed your responses, I\’ll get back to you with an initial list, next steps, and payment details. I will then send you a more detailed, in-depth questionnaire to complete before your first session.’,
  },
};

export default function ServicePage({ setCurrentPage, service }) {
  const data = SERVICE_DATA[service] || SERVICE_DATA.whisper;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .sv-wrap {
          min-height: 100vh;
          background: ${data.bodyBg};
          font-family: 'EB Garamond', Georgia, serif;
          color: #2c1810;
        }

        .sv-wrap .sticky-header.scrolled { background-color: ${data.headerBg}; }

        .sv-hero {
          background: ${data.heroBg};
          padding: 9rem 48px 72px;
          text-align: center;
        }
        .sv-hero-eyebrow {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: ${data.eyebrowColor};
          margin-bottom: 18px;
          opacity: 0.85;
        }
        .sv-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 8vw, 76px);
          font-weight: 300;
          color: ${data.heroText};
          letter-spacing: 0.07em;
          line-height: 1;
          margin-bottom: 24px;
        }
        .sv-hero-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          color: ${data.eyebrowColor};
          letter-spacing: 0.08em;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        .sv-hero-rule {
          width: 40px;
          height: 1px;
          background: ${data.eyebrowColor};
          margin: 0 auto 20px;
          opacity: 0.6;
        }
        .sv-hero-tagline {
          font-size: 20px;
          font-style: italic;
          color: ${data.heroText};
          opacity: 0.75;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .sv-body {
          max-width: 720px;
          margin: 0 auto;
          padding: 56px 32px 80px;
        }

        .sv-back {
          background: none;
          border: 1px solid ${data.accent};
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${data.accent};
          padding: 10px 20px;
          margin-bottom: 48px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, color 0.2s;
        }
        .sv-back:hover { background: ${data.accent}; color: ${data.heroText === '#faf8f4' || data.heroText === '#faf3e8' ? data.heroText : '#faf8f4'}; }

        .sv-description p {
          font-size: 19px;
          line-height: 1.9;
          color: #4a3528;
          font-style: italic;
          margin-bottom: 20px;
        }

        .sv-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 44px 0;
        }
        .sv-divider-rule { flex: 1; height: 1px; background: rgba(44,24,16,0.15); }
        .sv-divider-mark {
          font-size: 12px;
          color: ${data.accent};
          opacity: 0.5;
        }

        .sv-next-card {
          border-left: 3px solid ${data.accent};
          background: rgba(255,255,255,0.45);
          padding: 28px 32px;
          margin-bottom: 0;
        }
        .sv-next-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: ${data.accent};
          margin-bottom: 14px;
          opacity: 0.8;
        }
        .sv-next-text {
          font-size: 18px;
          line-height: 1.85;
          color: #4a3528;
          font-style: italic;
        }

        .sv-cta-wrap {
          text-align: center;
          margin-top: 8px;
        }
        .sv-cta-btn {
          display: inline-block;
          background: ${data.accent};
          color: ${data.btnTextColor};
          border: none;
          padding: 16px 48px;
          border-radius: 2px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s;
          margin-bottom: 14px;
        }
        .sv-cta-btn:hover { opacity: 0.85; }
        .sv-cta-note {
          font-size: 15px;
          font-style: italic;
          color: #7a6050;
          letter-spacing: 0.04em;
        }
        .sv-disclaimer {
          margin-top: 20px;
          padding: 16px 20px;
          border: 1px solid rgba(44,24,16,0.15);
          background: rgba(44,24,16,0.04);
          font-size: 15px;
          font-style: italic;
          line-height: 1.75;
          color: #6a5040;
          text-align: left;
        }

        footer.sv-footer {
          background: rgba(44,24,16,0.06);
          border-top: 1px solid rgba(44,24,16,0.1);
          padding: 28px 32px;
          text-align: center;
          font-size: 14px;
          font-style: italic;
          color: #7a6050;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .sv-hero { padding-left: 24px; padding-right: 24px; }
          .sv-body { padding: 40px 20px 60px; }
          .sv-next-card { padding: 22px 20px; }
        }
      `}</style>

      <div className="sv-wrap">
        <Header setCurrentPage={setCurrentPage} alwaysVisible />

        <section className="sv-hero">
          <div className="sv-hero-eyebrow">{data.tier}</div>
          <h1 className="sv-hero-title">{data.name}</h1>
          <div className="sv-hero-price">£{data.price}</div>
          <div className="sv-hero-rule" />
          <p className="sv-hero-tagline">{data.tagline}</p>
        </section>

        <div className="sv-body">
          <button className="sv-back" onClick={() => setCurrentPage('pricing')}>
            ← Back to Our Services
          </button>

          <div className="sv-description">
            {data.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="sv-divider">
            <div className="sv-divider-rule" />
            <div className="sv-divider-mark">✦</div>
            <div className="sv-divider-rule" />
          </div>

          <div className="sv-next-card">
            <div className="sv-next-label">What happens next</div>
            <p className="sv-next-text">{data.whatNext}</p>
          </div>

          <div className="sv-divider">
            <div className="sv-divider-rule" />
            <div className="sv-divider-mark">✦</div>
            <div className="sv-divider-rule" />
          </div>

          <div className="sv-cta-wrap">
            <button className="sv-cta-btn" onClick={() => setCurrentPage('form')}>
              Begin the questionnaire →
            </button>
            <div className="sv-cta-note">Free · No obligation · 10–15 minutes</div>
            {data.disclaimer && (
              <div className="sv-disclaimer">{data.disclaimer}</div>
            )}
          </div>
        </div>

        <footer className="sv-footer">
          © 2024 The Whispered Kin. Nurturing names, honoring heritage.
          <br />
          <a href="mailto:cassia@thewhisperedkin.com" style={{ color: 'inherit', textDecoration: 'underline' }}>cassia@thewhisperedkin.com</a>
          <br />
          <a href="https://www.instagram.com/thewhisperedkin" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@thewhisperedkin</a>
        </footer>
      </div>
    </>
  );
}
