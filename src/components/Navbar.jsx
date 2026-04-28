import React, { useState, useEffect } from 'react';
import { FaBars as Menu, FaTimes as X, FaSun, FaMoon } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          <span className="text-gradient">Mr.Shubham.</span>
        </a>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <FaSun size={20} color="var(--text-primary)" /> : <FaMoon size={20} color="var(--text-primary)" />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          z-index: 1000;
          background: var(--bg-tertiary);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-full);
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 2rem;
          gap: 3rem;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
        }
        .nav-desktop {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          position: relative;
          font-size: 0.9rem;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent-gradient);
          transition: width var(--transition-fast);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: var(--border-radius-full);
          transition: background-color var(--transition-fast);
        }
        .theme-toggle:hover {
          background-color: var(--border-color);
        }
        .mobile-menu-btn {
          display: none;
        }
        .mobile-menu {
          position: absolute;
          top: calc(100% + 1rem);
          left: 50%;
          transform: translateX(-50%);
          width: calc(100vw - 2rem);
          max-width: 400px;
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          background: var(--bg-primary);
        }
        .mobile-nav-link {
          padding: 1rem 2rem;
          font-weight: 500;
          border-bottom: 1px solid var(--border-color);
        }
        .mobile-nav-link:last-child {
          border-bottom: none;
        }
        @media (max-width: 768px) {
          .navbar {
            width: calc(100% - 2rem);
          }
          .navbar-container {
            gap: 1rem;
            padding: 0.75rem 1.5rem;
          }
          .nav-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
