import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentPage, alwaysVisible = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysVisible]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.sticky-header')) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  const navigate = (page) => {
    setMenuOpen(false);
    setCurrentPage(page);
  };

  return (
    <header className={`sticky-header ${(alwaysVisible || scrolled) ? 'scrolled' : ''}`}>
      {/* Title */}
      <div className="sticky-header__title" onClick={() => navigate('home')}>
        The Whispered Kin
      </div>

      {/* Hamburger button */}
      <button
        className={`sticky-header__menu-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
      >
        <span className="sticky-header__bar" />
        <span className="sticky-header__bar" />
      </button>

      {/* Dropdown */}
      <nav className={`sticky-header__dropdown ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => navigate('home')}   className="sticky-header__nav-item">Home</button>
        <button onClick={() => navigate('about')}  className="sticky-header__nav-item">About</button>
        <button onClick={() => navigate('pricing')} className="sticky-header__nav-item">Start Your Journey</button>
        <button onClick={() => navigate('faq')}     className="sticky-header__nav-item">FAQ</button>
      </nav>
    </header>
  );
};

export default Header;