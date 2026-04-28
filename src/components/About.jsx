import React from 'react';

const About = () => {
  return (
    <div id="about" className="bento-item col-span-2 row-span-1 reveal" style={{ transitionDelay: '0.1s' }}>
      <h2 className="section-title" >About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a Full Stack Developer focused on building modern, responsive, and user-friendly web applications using the MERN stack.
          </p>
          <p>
            I enjoy turning ideas into real-world projects and solving problems through clean and efficient code. I have experience working with technologies like React, Node.js, Express, MongoDB, and Tailwind CSS.
          </p>
          <p>I'm constantly learning new skills and improving my development process to build better and faster applications. My goal is to create impactful digital experiences and grow as a professional developer.</p>

          <div className="stats-grid">
            <div className="stat-item">
              <h4 className="stat-number text-gradient">5</h4>
              <p className="stat-label">Projects</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-number text-gradient">5 Months</h4>
              <p className="stat-label">INTERNSHIP
                EXPERIENCE</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-number text-gradient">100%</h4>
              <p className="stat-label">LEARNING
                CONSISTENCY</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .about-text {
          padding: 0;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default About;
