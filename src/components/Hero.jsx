// import React from 'react';
import { FaArrowRight as ArrowRight, FaGithub as Github, FaLinkedin as Linkedin, FaEnvelope as Mail } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="bento-item col-span-4 row-span-2 reveal">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-greeting">Hello, I'm</h2>
          <h1 className="hero-name text-gradient">Shubham Sonawane</h1>
          <h3 className="hero-role">Full Stack Developer</h3>
          <p className="hero-tagline">
            I build modern, scalable, and stunning web applications that deliver exceptional user experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <div className="hero-socials">
              <a href="https://github.com/shubhamsonawane2005" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shubham-sonawane-09345a2b3/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
              <a href="#contact" className="social-icon">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container glass">
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <img
              src="/profile.png"
              alt="Profile"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          height: 100%;
        }

        .hero-greeting {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(100, 100, 100, 0.05));
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .hero-name {
          font-size: 5rem;
          margin-bottom: 0.5rem;
          color: #000;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .hero-role {
          font-size: 1.5rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .hero-tagline {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 500px;
          margin-bottom: 2.5rem;
          line-height: 1.7;
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(196, 196, 196);
          color: #000;
          border-radius: 50%;
          transition: all var(--transition-normal);
          border: 2px solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
          font-size: 1.2rem;
        }

        .social-icon:hover {
          color: #fff;
          background: #000;
          border-color: #000;
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
          text-decoration: none;
        }

        .btn-primary {
          background: #000;
          color: white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          background: #222;
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        .hero-image-container {
          width: 420px;
          height: 420px;
          border-radius: var(--border-radius-full);
          padding: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          box-shadow: 
            0 0 80px rgba(0, 0, 0, 0.4),
            0 0 50px rgba(50, 50, 50, 0.3),
            0 30px 80px rgba(0, 0, 0, 0.2);
          animation: imagePulse 4s ease-in-out infinite;
        }

        @keyframes imagePulse {
          0%, 100% { 
            box-shadow: 
              0 0 80px rgba(0, 0, 0, 0.4),
              0 0 50px rgba(50, 50, 50, 0.3),
              0 30px 80px rgba(0, 0, 0, 0.2);
            transform: translateY(0px);
          }
          50% { 
            box-shadow: 
              0 0 100px rgba(0, 0, 0, 0.6),
              0 0 70px rgba(50, 50, 50, 0.5),
              0 40px 100px rgba(0, 0, 0, 0.3);
            transform: translateY(-10px);
          }
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--border-radius-full);
          z-index: 2;
          border: 4px solid #ffffff;
        }

        .abstract-shape {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }

        .shape-1 {
          width: 130%;
          height: 130%;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%);
          top: -15%;
          right: -15%;
          animation: float 7s ease-in-out infinite;
          filter: blur(50px);
        }

        .shape-2 {
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(100, 100, 100, 0.1) 0%, transparent 70%);
          bottom: -15%;
          left: -15%;
          animation: float 9s ease-in-out infinite reverse;
          filter: blur(50px);
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-greeting {
            margin: 0 auto 1rem;
          }
          .hero-name {
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
          }
          .hero-role {
            font-size: 1.25rem;
          }
          .hero-tagline {
            margin: 1rem auto 2.5rem;
          }
          .hero-actions {
            justify-content: center;
            flex-direction: column;
            gap: 1.5rem;
          }
          .hero-image-container {
            width: 320px;
            height: 320px;
          }
          .hero-image-wrapper {
            order: -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
