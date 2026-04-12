import { useState } from "react";
import '../styles/FAQPage.css';
import Header from "./Header";
const faqs = [
  {
    category: "The Process",
    items: [
      {
        q: "How does it work?",
        a: "It begins with our questionnaire — a gentle, unhurried set of questions about your family's heritage, your instincts, the names you've loved from afar, and the hopes you carry for your child. Once you've submitted your answers, we read them carefully and spend time researching names across languages, histories, and literary traditions. Within a week, we'll send you a beautifully curated PDF with three to five names chosen especially for your family — each with its full story, meaning, and origin explained.",
      },
      {
        q: "How long does it take?",
        a: "We ask for up to one week from the moment we receive your completed questionnaire. Good naming takes time — we won't rush it. If you have an urgent deadline, such as a baby who has arrived early, please do mention it when you submit your questionnaire and we will do everything we can to accommodate you.",
      },
      {
        q: "What do I actually receive?",
        a: "You'll receive a curated PDF report containing three to five names selected with care for your family specifically. Each name comes with its meaning, origin, linguistic heritage, and our notes on why we felt it belonged to you. It is not a long list — it is a considered one. Quality over quantity is at the heart of everything we do.",
      },
      {
        q: "What happens after I receive my names?",
        a: "After you've had time to sit with your names, we offer a follow-up call or email Q&A where you can ask questions, share your reactions, and talk through anything that's on your mind. Sometimes a name needs a little conversation before it settles. We're here for that.",
      },
    ],
  },
  {
    category: "The Questionnaire",
    items: [
      {
        q: "How long does the questionnaire take?",
        a: "Most families take between 10 and 20 minutes. There are no right or wrong answers — only yours. Some people write a few sentences; others find it opens something and write much more. Both are completely welcome. The detail you almost didn't include is often the most useful.",
      },
      {
        q: "Do we need to know the sex of our baby?",
        a: "Not at all. Many families come to us not knowing, or deliberately keeping it a surprise. In those cases, we can prepare names across the full spectrum, or focus on names that feel beautifully ungendered. Simply let us know your situation in the questionnaire.",
      },
      {
        q: "What if my partner and I disagree on names?",
        a: "This is one of the most common things families tell us — and it's often why they come to us. When two people with different instincts can't find common ground, an outside perspective can help enormously. We read both sets of feelings and look for names that might speak to both of you. Occasionally, the right name is one neither of you had considered yet.",
      },
      {
        q: "Can I complete the questionnaire even if I already have some names in mind?",
        a: "Absolutely — and please do share them. Names you've loved, names that felt close but not quite right, names you were surprised to find yourselves drawn to: all of it is useful. The more honestly you share, the better we can understand what you're really looking for.",
      },
    ],
  },
  {
    category: "Names & Research",
    items: [
      {
        q: "Where do you find the names?",
        a: "Everywhere. We draw on etymology, mythology, literature, history, linguistics, botanical and natural naming traditions, place names, and the quiet corners of cultural heritage that rarely make it onto popular baby name lists. We also pay close attention to how a name sounds alongside your surname, how it wears across a lifetime, and whether it carries the feeling you described.",
      },
      {
        q: "Will the names be unusual? I don't want something too out there.",
        a: "We take our cue entirely from you. If you want something timeless and familiar with a gentle distinction, that's what we'll find. If you want something quietly rare and deeply meaningful, we'll go there. We don't have an agenda toward unusual names — we have an agenda toward the right name for your family.",
      },
      {
        q: "Can you help with middle names too?",
        a: "Yes. If you'd like us to consider middle names alongside first names — whether to honour a family member, balance a longer surname, or simply because you want the full picture — please mention this in your questionnaire. We're happy to look at the name as a whole.",
      },
      {
        q: "Do you only suggest English names?",
        a: "Not at all. Our research spans languages and cultures across the world — from Celtic and Scandinavian traditions to Arabic, Hebrew, Japanese, Latin, and beyond. If your family has a particular heritage or a language you love the sound of, we'll explore it. If you're open to everything, so are we.",
      },
    ],
  },
  {
    category: "Practicalities",
    items: [
      {
        q: "Is my information kept private?",
        a: "Completely. Everything you share with us — your family's story, your hopes, the personal details in your questionnaire — is treated with the same discretion we would wish for ourselves. We never share your information with third parties for marketing purposes. You can read our full Privacy Policy for details.",
      },
      {
        q: "What if none of the names feel right?",
        a: "We'd be very surprised — but not unmoved. If you receive your names and feel genuinely that we've missed the mark, please tell us. We'd rather understand where we went and try again than leave you without the name your child deserves. We care about the outcome, not just the delivery.",
      },
      {
        q: "When should I get in touch — how early is too early?",
        a: "There is no such thing as too early. Some families come to us in the first trimester, wanting to begin the conversation long before the birth. Others reach out in the final weeks, or even after their baby has arrived and they're still searching. Wherever you are in the journey, you're welcome here.",
      },
      {
        q: "Do you work with families outside the UK?",
        a: "Yes — our work is entirely online, and we work with families all over the world. If English is not your first language but you're comfortable writing in it, we're able to work together. We also welcome enquiries in French.",
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