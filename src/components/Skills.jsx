import React from 'react';

const Skills = ({ title, skills, className, delay = '0.2s' }) => {
  return (
    <div className={`bento-item ${className} reveal`} style={{ transitionDelay: delay }}>
      <h3 className="skill-box-title text-gradient">{title}</h3>

      <div className="skills-content">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-box-title {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .skills-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .skill-item {
          margin-bottom: 1.25rem;
        }

        .skill-item:last-child {
          margin-bottom: 0;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .skill-percentage {
          color: var(--text-muted);
        }

        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background: var(--bg-primary);
          border-radius: var(--border-radius-full);
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: var(--border-radius-full);
          position: relative;
        }
        
        .skill-bar-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Custom scrollbar for skills list */
        .skills-content::-webkit-scrollbar {
          width: 4px;
        }
        .skills-content::-webkit-scrollbar-track {
          background: transparent;
        }
        .skills-content::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Skills;
