// import React from 'react';

const About = () => {
  return (
    <div id="about" className="bento-item col-span-2 row-span-2 reveal" style={{ transitionDelay: '0.1s' }}>
      <div className="about-header">
        <h2 className="section-title left">About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <p className="lead-text">
              Transforming complex problems into elegant digital solutions with a focus on performance and user experience.
            </p>
            <p>
              I am a passionate Full Stack Developer specializing in the MERN & MEAN stacks. My journey in development is driven by a deep curiosity for how things work and a commitment to building applications that make a difference.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <h4 className="stat-number text-gradient">3+</h4>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number text-gradient">5 Mon</h4>
                <p className="stat-label">Internship</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-number text-gradient">100%</h4>
                <p className="stat-label">Dedication</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="illustration-container">
              <img src="/Portfolio/about_illustration.png" alt="Developer Illustration" className="about-image" />
              <div className="visual-badge glass">
                <span className="badge-dot"></span>
                Available for Projects
              </div>
            </div>
          </div>
        </div>


      </div>

      <style>{`
        .about-header {
          margin-bottom: 2.5rem;
        }

        .section-title.left {
          text-align: left;
          left: 0;
          transform: none;
          margin-bottom: 0.5rem;
          font-size: 2rem;
        }

        .section-title.left::after {
          display: none;
        }

        .title-line {
          width: 50px;
          height: 4px;
          background: var(--accent-gradient);
          border-radius: var(--border-radius-full);
        }

        .about-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
          align-items: center;
        }

        .lead-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary) !important;
          margin-bottom: 1rem !important;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .illustration-container {
          position: relative;
          width: 100%;
          max-width: 240px;
        }

        .about-image {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.4));
          animation: float 6s ease-in-out infinite;
        }

        .visual-badge {
          position: absolute;
          bottom: -5px;
          right: -5px;
          padding: 0.6rem 1rem;
          border-radius: var(--border-radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
          animation: pulse 2s infinite;
        }

        .expertise-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .expertise-card {
          padding: 1rem;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: transform var(--transition-normal);
        }

        .expertise-card:hover {
          transform: translateY(-3px);
        }

        .expertise-icon {
          font-size: 1.25rem;
        }

        .expertise-info h5 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.1rem;
        }

        .expertise-info p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 1200px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .about-visual {
            order: -1;
          }
          .illustration-container {
            max-width: 180px;
          }
          .expertise-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
