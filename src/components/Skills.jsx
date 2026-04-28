import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'RESTful APIs', level: 90 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 95 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
      ]
    }
  ];

  return (
    <div id="skills" className="bento-item col-span-2 row-span-1 reveal" style={{ transitionDelay: '0.2s' }}>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-content">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title text-gradient">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
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
          ))}
        </div>
      </div>

      <style>{`
        .skills-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category {
          margin-bottom: 1rem;
        }

        .category-title {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
        }

        .skill-item {
          margin-bottom: 1.5rem;
        }

        .skill-item:last-child {
          margin-bottom: 0;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .skill-percentage {
          color: var(--text-muted);
        }

        .skill-bar-bg {
          width: 100%;
          height: 8px;
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
      `}</style>
    </div>
  );
};

export default Skills;
