import Header from './Header';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pr-wrap {
    min-height: 100vh;
    background: #e8dfc8;
    font-family: 'EB Garamond', Georgia, serif;
    color: #2c1810;
  }

  .pr-hero {
    background: #7fa8a8;
    padding: 9rem 48px 88px;
    text-align: center;
    border-bottom: 3px solid #8b1a1a;
  }
  .pr-hero-eyebrow {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #c8a96e;
    margin-bottom: 20px;
    animation: fadeUp 0.6s ease both;
  }
  .pr-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 300;
    color: #faf8f4;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 28px;
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .pr-hero-rule {
    width: 48px;
    height: 1px;
    background: #c8a96e;
    margin: 0 auto 28px;
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .pr-hero-sub {
    font-size: 21px;
    font-style: italic;
    color: rgba(250,248,244,0.82);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.75;
    animation: fadeUp 0.6s 0.3s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pr-intro {
    max-width: 620px;
    margin: 64px auto 0;
    padding: 0 32px;
    text-align: center;
  }
  .pr-intro p {
    font-size: 19px;
    line-height: 1.85;
    color: #4a3528;
    font-style: italic;
  }

  /* FREE STEP */
  .pr-free-wrap {
    max-width: 1100px;
    margin: 56px auto 0;
    padding: 0 32px;
    animation: fadeUp 0.5s ease both;
  }
  .pr-free-inner {
    background: #faf8f4;
    border: 1px solid rgba(139,26,26,0.15);
    border-left: 4px solid #c8a96e;
    padding: 32px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
  }
  .pr-free-tag {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #7fa8a8;
    margin-bottom: 8px;
  }
  .pr-free-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 400;
    color: #8b1a1a;
    letter-spacing: 0.04em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .pr-free-badge {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c8a96e;
    border: 1px solid #c8a96e;
    padding: 4px 14px;
  }
  .pr-free-desc {
    font-size: 17px;
    font-style: italic;
    color: #4a3528;
    line-height: 1.7;
    max-width: 520px;
  }
  .pr-free-features {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 14px;
  }
  .pr-free-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #7a6050;
  }
  .pr-free-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #c8a96e;
    flex-shrink: 0;
  }
  .pr-free-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: 1px solid rgba(139,26,26,0.4);
    color: #8b1a1a;
    padding: 14px 32px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .pr-free-btn:hover { background: #8b1a1a; color: #faf8f4; border-color: #8b1a1a; }

  /* DIVIDER */
  .pr-divider {
    max-width: 1100px;
    margin: 48px auto 0;
    padding: 0 32px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .pr-divider-rule { flex: 1; height: 1px; background: rgba(139,26,26,0.15); }
  .pr-divider-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #7fa8a8;
    white-space: nowrap;
  }

  /* CARDS */
  .pr-grid {
    max-width: 1100px;
    margin: 40px auto 0;
    padding: 0 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    align-items: stretch;
  }

  .pr-card {
    position: relative;
    background: #faf8f4;
    border: 1px solid rgba(139,26,26,0.15);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeUp 0.6s ease both;
  }
  .pr-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(44,24,16,0.12);
    z-index: 2;
  }
  .pr-card.featured {
    background: #2c1810;
    border-color: #c8a96e;
    transform: translateY(-12px);
    box-shadow: 0 24px 64px rgba(44,24,16,0.2);
    z-index: 3;
  }
  .pr-card.featured:hover { transform: translateY(-18px); }

  .pr-card-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: #c8a96e;
    color: #2c1810;
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    padding: 5px 18px;
    white-space: nowrap;
  }

  .pr-card-top {
    padding: 48px 32px 28px;
    border-bottom: 1px solid rgba(139,26,26,0.12);
    text-align: center;
  }
  .pr-card.featured .pr-card-top { border-bottom-color: rgba(200,169,110,0.25); }

  .pr-card-tier {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #7fa8a8;
    margin-bottom: 12px;
  }
  .pr-card.featured .pr-card-tier { color: #c8a96e; }

  .pr-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 400;
    color: #8b1a1a;
    letter-spacing: 0.05em;
    margin-bottom: 22px;
    line-height: 1.1;
  }
  .pr-card.featured .pr-card-name { color: #faf8f4; }

  .pr-price-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    margin-bottom: 10px;
  }
  .pr-price-symbol {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    color: #c8a96e;
    margin-top: 8px;
  }
  .pr-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px;
    font-weight: 300;
    color: #2c1810;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  .pr-card.featured .pr-price { color: #faf8f4; }

  .pr-price-note {
    font-size: 15px;
    font-style: italic;
    color: #7a6050;
  }
  .pr-card.featured .pr-price-note { color: rgba(250,248,244,0.45); }

  .pr-card-tagline {
    margin-top: 16px;
    font-size: 16px;
    font-style: italic;
    color: #5a4030;
    line-height: 1.65;
  }
  .pr-card.featured .pr-card-tagline { color: rgba(250,248,244,0.62); }

  .pr-card-body {
    padding: 28px 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .pr-includes-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #7fa8a8;
    margin-bottom: 18px;
  }
  .pr-card.featured .pr-includes-label { color: #c8a96e; }

  .pr-feature {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 14px;
  }
  .pr-feature-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #c8a96e;
    flex-shrink: 0;
    margin-top: 8px;
  }
  .pr-feature-text {
    font-size: 17px;
    line-height: 1.6;
    color: #4a3528;
  }
  .pr-card.featured .pr-feature-text { color: rgba(250,248,244,0.8); }
  .pr-feature-em { font-style: italic; color: #8b1a1a; }
  .pr-card.featured .pr-feature-em { color: #c8a96e; }

  .pr-card-footer { padding: 0 32px 36px; }

  .pr-btn {
    display: block;
    width: 100%;
    padding: 15px;
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }
  .pr-btn-outline { background: transparent; border: 1px solid rgba(139,26,26,0.4); color: #8b1a1a; }
  .pr-btn-outline:hover { background: #8b1a1a; color: #faf8f4; border-color: #8b1a1a; }
  .pr-btn-gold { background: #c8a96e; color: #2c1810; }
  .pr-btn-gold:hover { background: #b8955a; }

  /* BESPOKE NOTE */
  .pr-bespoke {
    max-width: 620px;
    margin: 72px auto 0;
    padding: 40px 48px;
    border: 1px solid rgba(139,26,26,0.2);
    text-align: center;
    position: relative;
  }
  .pr-bespoke::before {
    content: '✦';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #e8dfc8;
    padding: 0 12px;
    color: #c8a96e;
    font-size: 14px;
  }
  .pr-bespoke-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    color: #8b1a1a;
    letter-spacing: 0.04em;
    margin-bottom: 14px;
  }
  .pr-bespoke-body {
    font-size: 18px;
    font-style: italic;
    line-height: 1.8;
    color: #4a3528;
  }

  /* PROMISE */
  .pr-promise {
    max-width: 760px;
    margin: 64px auto 0;
    padding: 0 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    text-align: center;
  }
  .pr-promise-icon { font-size: 18px; margin-bottom: 12px; color: #c8a96e; }
  .pr-promise-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8b1a1a;
    margin-bottom: 8px;
  }
  .pr-promise-text { font-size: 16px; font-style: italic; color: #7a6050; line-height: 1.7; }

  /* CTA */
  .pr-cta {
    margin-top: 80px;
    background: #7fa8a8;
    border-top: 3px solid #8b1a1a;
    padding: 64px 32px;
    text-align: center;
  }
  .pr-cta-eyebrow {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #c8a96e;
    margin-bottom: 16px;
  }
  .pr-cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(30px, 5vw, 48px);
    font-weight: 300;
    color: #faf8f4;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .pr-cta-body {
    font-size: 19px;
    font-style: italic;
    color: rgba(250,248,244,0.75);
    max-width: 400px;
    margin: 0 auto 36px;
    line-height: 1.7;
  }
  .pr-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #8b1a1a;
    color: #faf8f4;
    border: none;
    padding: 18px 44px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }
  .pr-cta-btn:hover { background: #6b1010; }

  /* BACK BUTTON */
  .page-back-btn {
    background: none;
    border: 1px solid rgba(74,53,40,0.45);
    cursor: pointer;
    font-family: 'Cormorant Garamond', serif;
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #4a3528;
    padding: 10px 20px;
    margin: 28px 32px 0;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, color 0.2s;
  }
  .page-back-btn:hover { background: #4a3528; color: #faf8f4; }

  /* FOOTER */
  .pr-footer {
    background: #2c1810;
    color: #e2d3b7;
    padding: 28px 32px;
    text-align: center;
    font-size: 15px;
    font-style: italic;
    line-height: 1.8;
  }
  .pr-footer a { color: inherit; text-decoration: underline; }

  /* Header scoped override */
  .pr-wrap .sticky-header.scrolled { background-color: #e2d3b7; }

  @media (max-width: 900px) {
    .pr-grid { grid-template-columns: 1fr; max-width: 460px; gap: 24px; }
    .pr-card.featured { transform: none; }
    .pr-card.featured:hover { transform: translateY(-6px); }
    .pr-promise { grid-template-columns: 1fr; gap: 24px; }
    .pr-free-inner { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 600px) {
    .pr-hero { padding-left: 24px; padding-right: 24px; }
    .pr-grid, .pr-free-wrap, .pr-divider, .pr-promise { padding: 0 20px; }
    .pr-card-top, .pr-card-body, .pr-card-footer { padding-left: 24px; padding-right: 24px; }
    .pr-bespoke { padding: 36px 24px; margin: 48px 20px 0; }
  }
`;

const packages = [
  {
    id: "whisper",
    tier: "First Step",
    name: "The Whisper",
    price: "50",
    tagline: "A gentle, focused conversation for families who need a little guidance.",
    features: [
      { text: "My naming questionnaire — your starting point, taken at your own pace" },
      { text: "One 30-minute consultation by call or video to talk through your answers and my initial thoughts" },
      { text: "A curated shortlist of names explored together during your session" },
      { text: "Follow-up email summary of everything covered" },
    ],
    btn: "pr-btn-outline",
    btnText: "Begin with The Whisper",
    badge: null,
    delay: "0s",
  },
  {
    id: "journey",
    tier: "Most Popular",
    name: "The Journey",
    price: "200",
    tagline: "For families who want to explore deeply and arrive at their name with real confidence.",
    features: [
      { text: "My most comprehensive in-depth questionnaire" },
      { text: "Two one-hour consultations by call or video, at a pace that suits you" },
      { text: "A beautifully ", em: "curated PDF report", rest: " — your names with their full meanings, origins, and my personal notes" },
      { text: "Sibling harmony, middle name, and surname flow all considered" },
      { text: "Follow-up email Q&A after each session" },
    ],
    btn: "pr-btn-gold",
    btnText: "Begin The Journey",
    badge: "Most Chosen",
    featured: true,
    delay: "0.1s",
  },
  {
    id: "unfolding",
    tier: "Full Service",
    name: "The Unfolding",
    price: "375",
    tagline: "Complete accompaniment to the moment the name becomes theirs.",
    features: [
      { text: "My most comprehensive in-depth questionnaire" },
      { text: "Three one-hour consultations by call or video" },
      { text: "A ", em: "shared, living document", rest: " — your names, research, and notes updated together as the process evolves" },
      { text: "Continued communication by messaging until your name is decided — no fixed end date" },
      { text: "Sibling harmony, middle name, and surname flow all considered" },
      { text: "A personal naming letter to frame — the story of how your child's name was found" },
    ],
    btn: "pr-btn-outline",
    btnText: "Begin The Unfolding",
    badge: null,
    delay: "0.2s",
  },
];

function Feature({ feature }) {
  return (
    <div className="pr-feature">
      <div className="pr-feature-dot" />
      <span className="pr-feature-text">
        {feature.em ? (
          <>{feature.text}<span className="pr-feature-em">{feature.em}</span>{feature.rest}</>
        ) : feature.text}
      </span>
    </div>
  );
}

export default function PricingPage({ setCurrentPage, onServiceSelect }) {
  return (
    <>
      <style>{styles}</style>
      <div className="pr-wrap">

        <Header setCurrentPage={setCurrentPage} alwaysVisible />

        <section className="pr-hero">
          <div className="pr-hero-eyebrow">Investment &amp; Packages</div>
          <h1 className="pr-hero-title">Services</h1>
          <div className="pr-hero-rule" />
          <p className="pr-hero-sub">
            Whether you need
            a single conversation to unlock what you already know, or a longer, unhurried
            journey of discovery. Choose the path that feels right for where you are.
          </p>
        </section>

        <button className="page-back-btn" onClick={() => setCurrentPage('home')}>← Back</button>

        <div className="pr-intro">
        </div>

        {/* Free questionnaire */}
        <div className="pr-free-wrap">
          <div className="pr-free-inner">
            <div>
              <div className="pr-free-tag">Where every journey begins</div>
              <div className="pr-free-title">
                The Questionnaire
                <span className="pr-free-badge">Free</span>
              </div>
              <div className="pr-free-desc">
                Before anything else, I listen. My questionnaire takes 10–15 minutes
                and is the first step for every family, whichever path they choose. I will get back to you within 1 week with initial ideas and thoughts based on your answers — no obligation to continue until you're ready.

              </div>
              <div className="pr-free-features">
                <div className="pr-free-feature"><div className="pr-free-dot" />Your family's story &amp; heritage</div>
                <div className="pr-free-feature"><div className="pr-free-dot" />Your instincts &amp; inspirations</div>
                <div className="pr-free-feature"><div className="pr-free-dot" />No obligation to continue</div>
              </div>
            </div>
            <button className="pr-free-btn" onClick={() => setCurrentPage('form')}>Begin the questionnaire →</button>
          </div>
        </div>

        {/* Divider */}
        <div className="pr-divider">
          <div className="pr-divider-rule" />
          <div className="pr-divider-text">Then choose your path</div>
          <div className="pr-divider-rule" />
        </div>

        {/* Paid packages */}
        <div className="pr-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`pr-card${pkg.featured ? " featured" : ""}`}
              style={{ animationDelay: pkg.delay }}
            >
              {pkg.badge && <div className="pr-card-badge">{pkg.badge}</div>}
              <div className="pr-card-top">
                <div className="pr-card-tier">{pkg.tier}</div>
                <div className="pr-card-name">{pkg.name}</div>
                <div className="pr-price-wrap">
                  <span className="pr-price-symbol">£</span>
                  <span className="pr-price">{pkg.price}</span>
                </div>
                <div className="pr-price-note">one-time investment</div>
                <div className="pr-card-tagline">{pkg.tagline}</div>
              </div>
              <div className="pr-card-body">
                <div className="pr-includes-label">What's included</div>
                {pkg.features.map((f, fi) => <Feature key={fi} feature={f} />)}
              </div>
              <div className="pr-card-footer">
                <button className={`pr-btn ${pkg.btn}`} onClick={() => onServiceSelect(pkg.id)}>
                  {pkg.btnText} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Not sure note */}
        <div className="pr-bespoke">
          <div className="pr-bespoke-title">Not sure which to choose?</div>
          <div className="pr-bespoke-body">
            Start with the free questionnaire — I'll suggest the path that feels right
            for your situation. You're also welcome to write to me first at{" "}
            <span style={{ color: "#8b1a1a" }}>cassia@thewhisperedkin.com</span>.
            There's no obligation until you're ready.
          </div>
        </div>

        {/* Promise pillars */}
        <div className="pr-promise">
          <div>
            <div className="pr-promise-icon">✦</div>
            <div className="pr-promise-title">No rushing</div>
            <p className="pr-promise-text">I work at the pace your family needs. There are no hurried lists here.</p>
          </div>
          <div>
            <div className="pr-promise-icon">✦</div>
            <div className="pr-promise-title">Deep research</div>
            <p className="pr-promise-text">Every name is traced to its roots — in language, history, and story.</p>
          </div>
          <div>
            <div className="pr-promise-icon">✦</div>
            <div className="pr-promise-title">Complete discretion</div>
            <p className="pr-promise-text">Everything you share is held with care and confidence.</p>
          </div>
        </div>

        {/* CTA */}
        <section className="pr-cta">
          <div className="pr-cta-eyebrow">Ready to Begin</div>
          <h2 className="pr-cta-title">The right name is<br />already out there</h2>
          <p className="pr-cta-body">
            Start with my free questionnaire — it's the same first step, whichever path you choose.
          </p>
          <button className="pr-cta-btn" onClick={() => setCurrentPage('form')}>Begin Your Journey →</button>
        </section>

        <footer className="pr-footer">
          © 2024 The Whispered Kin. Nurturing names, honoring heritage.<br />
          <a href="mailto:cassia@thewhisperedkin.com">cassia@thewhisperedkin.com</a><br />
          <a href="https://www.instagram.com/thewhisperedkin" target="_blank" rel="noreferrer">@thewhisperedkin</a>
        </footer>

      </div>
    </>
  );
}
