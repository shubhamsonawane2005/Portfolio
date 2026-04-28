// import React from 'react';
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span
              className="text-gradient"
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Mr.Shubham.
            </span>
            <p className="footer-tagline">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://github.com/shubhamsonawane2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-sonawane-09345a2b3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shubham Sonawane. All rights reserved.</p>
          <p>Designed with ❤️ using React</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-secondary);
          padding: 4rem 0 2rem 0;
          border-top: 1px solid var(--border-color);
          margin-top: 4rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-tagline {
          color: var(--text-secondary);
          margin-top: 1rem;
          max-width: 300px;
        }

        .footer-links-group h4,
        .footer-socials h4 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icons a:hover {
          background: var(--accent-gradient);
          color: white;
          transform: translateY(-3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-tagline {
            margin: 1rem auto 0 auto;
          }
          .social-icons {
            justify-content: center;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
