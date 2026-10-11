import { useState } from "react";
import '../styles/FAQPage.css';
import Header from "./Header";
const faqs = [
  {
    category: "The Process",
    items: [
      {
        q: "How does it work?",
        a: "It begins with my free questionnaire — 10 to 15 minutes, taken at your own pace. Once I've read your answers, I'll be in touch within a week with any initial thoughts. From there, you can choose the path that feels right for you: The Whisper, The Journey, or The Unfolding. For anything you'd like to ask before starting, please email cassia@thewhisperedkin.com.",
      },
      {
        q: "How long does it take?",
        a: "I respond to all questionnaires within a week. From there, the timeline depends on the package you choose — from a focused single session with The Whisper, to an ongoing, open-ended relationship with The Unfolding. If you have an urgent deadline, please mention it in your questionnaire and I'll do everything I can to facilitate.",
      },
      {
        q: "What do I actually receive?",
        a: "It depends on your chosen path. The Whisper includes a curated shortlist explored together in a 30-minute consultation. The Journey delivers two one-hour sessions and a beautifully crafted PDF report. The Unfolding offers complete accompaniment — three sessions, a shared living document, and a personal naming letter to keep. For a full breakdown, visit my Services page or email me at cassia@thewhisperedkin.com.",
      },
      {
        q: "What happens after I submit the questionnaire?",
        a: "I read every answer carefully and write to you within a week. For The Journey and The Unfolding, I'll also send a more in-depth questionnaire once your place is confirmed and payment is arranged.",
      },
    ],
  },
  {
    category: "The Questionnaire",
    items: [
      {
        q: "How long does the questionnaire take?",
        a: "Most families take 10 to 15 minutes. There are no right or wrong answers. The more you share with me, the better I can understand your instincts and preferences.",
      },
      {
        q: "Do we need to know the sex of our baby?",
        a: "Not at all. I can work with any situation — known sex, unknown, or names that feel unisex if preferred. Simply let me know in the questionnaire.",
      },
      {
        q: "What if my partner and I disagree on names?",
        a: "It's one of the most common reasons families come to me. I read both sets of instincts and look for names that speak to you both. Occasionally, the right name is one neither of you had considered yet.",
      },
      {
        q: "Can I complete the questionnaire if I already have names in mind?",
        a: "Please do share them. Names you've loved, names that felt close but not quite right — all of it helps me understand what you're truly looking for.",
      },
    ],
  },
  {
    category: "Names & Research",
    items: [
      {
        q: "Where do you find the names?",
        a: "Everywhere — etymology, mythology, literature, history, linguistics, botanical traditions, cultural heritage, the list goes on. I can also consider how a name sounds alongside your surname and how it wears across a lifetime.",
      },
      {
        q: "Will the names be unusual?",
        a: "I take my cue entirely from you. Timeless, familiar, unique — I don't have an agenda toward unusual. I have an agenda toward your preferences.",
      },
      {
        q: "Can you help with middle names too?",
        a: "Yes. Sibling harmony and middle name consideration are included in The Journey and The Unfolding. If you have specific questions about this, please email cassia@thewhisperedkin.com.",
      },
      {
        q: "Do you only suggest English names?",
        a: "Not at all. My research spans Celtic, Scandinavian, Arabic, Hebrew, Latin, and many more. If your family has a particular heritage or a language you love, I'll explore it.",
      },
    ],
  },
  {
    category: "Practicalities",
    items: [
      {
        q: "Is my information kept private?",
        a: "Completely. Everything you share is held with care and confidence. I never share your information with third parties. For any privacy questions, please email cassia@thewhisperedkin.com.",
      },
      {
        q: "What if none of the names feel right?",
        a: "Please tell me. I'd rather understand and try again than leave you without the right name. Email cassia@thewhisperedkin.com and I'll talk it through.",
      },
      {
        q: "When should I get in touch?",
        a: "There is no such thing as too early — or too late. Some families come in the first trimester; others reach out after their baby has arrived. Wherever you are in the journey, you're welcome here and I will do my best to accomodate you.",
      },
      {
        q: "Do you work with families outside the UK?",
        a: "Yes — I have the ability to work online and so work with families all over the world. For any questions about working together internationally, please email cassia@thewhisperedkin.com.",
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
            Please get in touch if you have any questions that aren't answered here. I want to make sure you feel confident and comfortable as we begin this journey together.
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
            Take the questionnaire and I'll be in touch within a week.
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