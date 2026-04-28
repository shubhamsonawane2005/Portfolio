import  { useState } from 'react';
import { FaGithub as Github, FaBookOpen as BookOpen } from 'react-icons/fa';
import CaseStudy from './CaseStudy';

const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const projectsList = [
    {
      title: 'Daily Drive',
      description: 'I built a carpooling web application using the MERN Stack that connects drivers and passengers for shared rides.Users can create, search, and book rides with secure authentication and real- time availability.The platform helps reduce travel costs and traffic while showcasing full - stack development with React, Node.js, and MongoDB.',
      image: '/dd.png',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/shubhamsonawane2005/Daily-Drive',
      caseStudyLink: '#case-study-1'
    },
    {
      title: 'Cinex',
      description: 'I built a carpooling web application, similar to Cinex, using the MEAN Stack.Users can browse available rides, select seats, and book trips just like reserving seats in a movie booking system.The platform offers a smooth, real- time booking experience while demonstrating full - stack development with Angular, CSS, Express.js, Node.js, MongoDB.',
      image: '/cc.png',
      techStack: ['Angular', 'CSS', 'Express.js', 'Node.js', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/shubhamsonawane2005/cinex',
      caseStudyLink: '#case-study-2'
    },
    {
      title: 'Apple-store',
      description: 'I built a carpooling web application, inspired by the seamless experience of the Apple Store, using the MERN Stack.Users can easily explore available rides, view details, and book seats through a clean and intuitive interface.The platform delivers a smooth, premium user experience while showcasing full- stack development with PHP, CSS, JavaScript, MySQL',
      image: '/apple.jpg',
      techStack: ['PHP', 'CSS', 'JavaScript', 'MySQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/shubhamsonawane2005/Apple-Website',
      caseStudyLink: '#case-study-3'
    }
  ];

  return (
    <>
      <div id="projects" className="bento-item col-span-4 row-span-2 reveal" style={{ transitionDelay: '0.1s' }}>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card" style={{ transitionDelay: `${index * 0.2}s` }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live Demo">
                    <ExternalLink size={20} />
                  </a> */}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Source Code">
                    <Github size={20} />
                  </a>
                  <button 
                    onClick={() => setSelectedCaseStudy(project.caseStudyLink.replace('#', ''))}
                    className="project-link-btn" 
                    title="Case Study"
                    style={{ border: 'none', cursor: 'pointer', background: 'var(--accent-gradient)' }}
                  >
                    <BookOpen size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          height: 100%;
        }

        .project-card {
          border-radius: var(--border-radius);
          overflow: hidden;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .project-image-container {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          transform: translateY(20px);
          transition: transform var(--transition-normal);
        }

        .project-card:hover .project-links {
          transform: translateY(0);
        }

        .project-link-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast);
        }

        .project-link-btn:hover {
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-secondary);
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
      `}</style>
      </div>
      {selectedCaseStudy && (
        <CaseStudy 
          projectId={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </>
  );
};

export default Projects;
