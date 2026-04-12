import { useState } from "react";
import '../styles/FAQPage.css';
import Header from "./Header";
const faqs = [
  {
    category: "The Process",
    items: [
      {
        q: "How does it work?",
        a: "It begins with our free questionnaire — 10 to 15 minutes, taken at your own pace. Once we've read your answers, we'll be in touch within two working days with our initial thoughts. From there, you choose the path that feels right: The Whisper (£50), The Journey (£200), or The Unfolding (£375). For anything you'd like to ask before starting, email cassia@thewhisperedkin.com.",
      },
      {
        q: "How long does it take?",
        a: "We respond to all questionnaires within two working days. From there, the timeline depends on the package you choose — from a focused single session with The Whisper, to an ongoing, open-ended relationship with The Unfolding. If you have an urgent deadline, please mention it in your questionnaire and we'll do everything we can.",
      },
      {
        q: "What do I actually receive?",
        a: "It depends on your chosen path. The Whisper includes a curated shortlist explored together in a 30-minute consultation. The Journey delivers two one-hour sessions and a beautifully crafted PDF report. The Unfolding offers complete accompaniment — three sessions, a shared living document, and a personal naming letter to keep. For a full breakdown, visit our Services page or email cassia@thewhisperedkin.com.",
      },
      {
        q: "What happens after I submit the questionnaire?",
        a: "We read every answer carefully and write to you within two working days. For The Journey and The Unfolding, we'll also send a more in-depth questionnaire once your place is confirmed and payment is arranged. Every package includes follow-up support — you're never left without someone to ask.",
      },
    ],
  },
  {
    category: "The Questionnaire",
    items: [
      {
        q: "How long does the questionnaire take?",
        a: "Most families take 10 to 15 minutes. There are no right or wrong answers — only yours. The detail you almost didn't include is often the most useful.",
      },
      {
        q: "Do we need to know the sex of our baby?",
        a: "Not at all. We can work with any situation — known sex, unknown, or names that feel beautifully ungendered. Simply let us know in the questionnaire.",
      },
      {
        q: "What if my partner and I disagree on names?",
        a: "It's one of the most common reasons families come to us. We read both sets of instincts and look for names that speak to you both. Occasionally, the right name is one neither of you had considered yet.",
      },
      {
        q: "Can I complete the questionnaire if I already have names in mind?",
        a: "Please do share them. Names you've loved, names that felt close but not quite right — all of it helps us understand what you're truly looking for.",
      },
    ],
  },
  {
    category: "Names & Research",
    items: [
      {
        q: "Where do you find the names?",
        a: "Everywhere — etymology, mythology, literature, history, linguistics, botanical traditions, and the quieter corners of cultural heritage. We also consider how a name sounds alongside your surname and how it wears across a lifetime.",
      },
      {
        q: "Will the names be unusual?",
        a: "We take our cue entirely from you. Timeless and familiar, or quietly rare and deeply meaningful — we don't have an agenda toward unusual. We have an agenda toward right.",
      },
      {
        q: "Can you help with middle names too?",
        a: "Yes. Sibling harmony and middle name consideration are included in The Journey and The Unfolding. If you have specific questions about this, email cassia@thewhisperedkin.com.",
      },
      {
        q: "Do you only suggest English names?",
        a: "Not at all. Our research spans Celtic, Scandinavian, Arabic, Hebrew, Latin, and many more traditions. If your family has a particular heritage or a language you love, we'll explore it.",
      },
    ],
  },
  {
    category: "Practicalities",
    items: [
      {
        q: "Is my information kept private?",
        a: "Completely. Everything you share is held with care and confidence. We never share your information with third parties. For any privacy questions, email cassia@thewhisperedkin.com.",
      },
      {
        q: "What if none of the names feel right?",
        a: "Please tell us. We'd rather understand and try again than leave you without the right name. Email cassia@thewhisperedkin.com and we'll talk it through.",
      },
      {
        q: "When should I get in touch?",
        a: "There is no such thing as too early — or too late. Some families come in the first trimester; others reach out after their baby has arrived. Wherever you are in the journey, you're welcome here.",
      },
      {
        q: "Do you work with families outside the UK?",
        a: "Yes — we work entirely online and with families all over the world. For any questions about working together internationally, email cassia@thewhisperedkin.com.",
      },
    ],
  },
];

export default function FAQPage({ setCurrentPage }) {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <div className="faq-wrap">

        {/* Header */}
        <Header setCurrentPage={setCurrentPage} alwaysVisible />


        {/* Hero */}
        <section className="faq-hero">
          <div className="faq-hero-eyebrow">Questions & Answers</div>
          <h1 className="faq-hero-title">What to Expect</h1>
          <div className="faq-hero-rule" />
          <p className="faq-hero-sub">
            Everything we are asked, answered as honestly as we can.
          </p>
        </section>

        {/* Back */}
        <button className="page-back-btn" onClick={() => setCurrentPage('home')}>← Back</button>

        {/* Category nav */}
        <nav className="faq-nav">
          <button
            className={`faq-nav-btn${activeCategory === "all" ? " active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          {faqs.map((f) => (
            <button
              key={f.category}
              className={`faq-nav-btn${activeCategory === f.category ? " active" : ""}`}
              onClick={() => setActiveCategory(f.category)}
            >
              {f.category}
            </button>
          ))}
        </nav>

        {/* FAQ content */}
        <main className="faq-main">
          {visibleFaqs.map((section, si) => (
            <div className="faq-category" key={section.category} style={{ animationDelay: `${si * 0.08}s` }}>
              <div className="faq-cat-header">
                <span className="faq-cat-title">{section.category}</span>
                <div className="faq-cat-rule" />
              </div>

              {section.items.map((item, qi) => {
                const key = `${si}-${qi}`;
                const isOpen = !!openItems[key];
                return (
                  <div className="faq-item" key={key}>
                    <button
                      className={`faq-question${isOpen ? " open" : ""}`}
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon">+</span>
                    </button>
                    <div className={`faq-answer-wrap${isOpen ? " open" : ""}`}>
                      <p className="faq-answer">{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </main>

        {/* CTA */}
        <section className="faq-cta">
          <div className="faq-cta-eyebrow">Ready to Begin</div>
          <h2 className="faq-cta-title">Your name is waiting<br />to be found</h2>
          <p className="faq-cta-body">
            Take the questionnaire and we'll be in touch within a week.
          </p>
          <button className="faq-cta-btn" onClick={() => setCurrentPage('pricing')}>
            Begin Your Journey →
          </button>
        </section>

        <footer className="faq-footer">
          © 2024 The Whispered Kin. Nurturing names, honoring heritage.<br />
          <a href="mailto:cassia@thewhisperedkin.com">cassia@thewhisperedkin.com</a><br />
          <a href="https://www.instagram.com/thewhisperedkin" target="_blank" rel="noreferrer">@thewhisperedkin</a>
        </footer>

      </div>
    </>
  );
}