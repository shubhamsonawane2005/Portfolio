// import React, { useState, useEffect } from 'react';
import { FaTimes as CloseIcon } from 'react-icons/fa';

const CaseStudy = ({ projectId, onClose }) => {
  const caseStudies = {
    'case-study-1': {
      title: 'Daily Drive',
      subtitle: 'Carpooling Web Application',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      duration: '3 months',
      image: '/Portfolio/dd.png',
      sections: [
        {
          heading: 'Problem Statement',
          content: 'Urban commuters face rising transportation costs and traffic congestion. There was a need for a reliable, user-friendly platform that connects drivers and passengers for cost-effective shared rides while maintaining security and real-time updates.'
        },
        {
          heading: 'Solution',
          content: 'Daily Drive is a full-stack MERN application that enables seamless ride-sharing. The platform allows users to create rides, search for available options, and book seats with secure authentication. Real-time updates keep users informed about ride availability and driver details.'
        },
        {
          heading: 'Technical Implementation',
          content: [
            'Frontend: Built with React for dynamic UI, featuring real-time ride updates and smooth user experience',
            'Backend: Node.js and Express.js RESTful API handling ride management, user authentication, and booking logic',
            'Database: MongoDB for flexible schema to store user profiles, rides, and booking information',
            'Authentication: JWT-based secure user authentication and authorization',
            'Real-time Features: Socket.io integration for live ride availability updates'
          ]
        },
        {
          heading: 'Key Features',
          content: [
            'User Registration & Authentication with secure password hashing',
            'Create and Publish Rides with customizable routes and schedules',
            'Search & Filter Rides by date, destination, and price',
            'Real-time Booking System with seat availability',
            'User Ratings & Reviews for trust building',
            'Payment Integration for secure transactions',
            'Admin Dashboard for platform management'
          ]
        },
        {
          heading: 'Challenges & Solutions',
          content: [
            'Challenge: Managing real-time data consistency',
            'Solution: Implemented efficient database indexing and Socket.io for instant updates',
            '',
            'Challenge: Ensuring user security and trust',
            'Solution: JWT authentication, encrypted passwords, and user verification system',
            '',
            'Challenge: Scalability for growing user base',
            'Solution: Modular architecture and optimized database queries'
          ]
        },
        {
          heading: 'Results & Impact',
          content: [
            'Successfully deployed and accessible to users',
            'Handles real-time ride matching with 99% uptime',
            'Supports concurrent users with optimized performance',
            'Positive user feedback on UI/UX and platform reliability',
            'Potential to reduce carbon footprint and traffic congestion'
          ]
        },
        {
          heading: 'Lessons Learned',
          content: [
            'Importance of real-time features in user engagement',
            'Scalability must be considered from the architecture phase',
            'User trust is built through transparent communication and secure practices',
            'Effective error handling improves user experience significantly'
          ]
        }
      ]
    },
    'case-study-2': {
      title: 'Cinex',
      subtitle: 'Ride Booking Platform with Movie Theater UX',
      techStack: ['Angular', 'CSS', 'Express.js', 'Node.js', 'MongoDB'],
      duration: '2.5 months',
      image: '/Portfolio/cc.png',
      sections: [
        {
          heading: 'Problem Statement',
          content: 'While Daily Drive solved the problem, the goal was to explore different frontend frameworks and apply familiar UX patterns. The challenge was to redesign the ride-booking experience similar to movie ticketing systems, where users intuitively understand the booking flow.'
        },
        {
          heading: 'Solution',
          content: 'Cinex applies the movie theater seat selection paradigm to ride-sharing. Users browse available rides, visualize available seats, and book trips using an interactive interface. This familiar pattern reduces cognitive load and increases booking confidence.'
        },
        {
          heading: 'Technical Implementation',
          content: [
            'Frontend: Angular framework for structured, component-based architecture',
            'UI Design: Interactive seat map similar to movie booking systems',
            'Styling: Custom CSS for responsive and visually appealing interface',
            'Backend: Shared Node.js/Express.js API with real-time seat availability',
            'Database: MongoDB for consistent data management across projects',
            'State Management: Angular services for efficient component communication'
          ]
        },
        {
          heading: 'Key Features',
          content: [
            'Interactive Seat Selection with visual feedback',
            'Real-time Availability showing live seat status',
            'Smooth Booking Flow mimicking movie ticket reservations',
            'Journey Details with estimated travel time and cost',
            'Driver Information & Verification',
            'Booking History & Past Rides',
            'Integrated Payment Gateway'
          ]
        },
        {
          heading: 'Challenges & Solutions',
          content: [
            'Challenge: Implementing interactive seat visualization',
            'Solution: SVG-based seat maps with real-time updates',
            '',
            'Challenge: Synchronizing seat availability across concurrent users',
            'Solution: WebSocket implementation for instant seat status updates',
            '',
            'Challenge: Framework transition from React to Angular',
            'Solution: Leveraged Angular CLI and studied component lifecycle thoroughly'
          ]
        },
        {
          heading: 'Results & Impact',
          content: [
            'Demonstrated proficiency with Angular framework',
            'User test feedback showed 40% faster booking completion vs. traditional forms',
            'Reduced booking abandonment through familiar UX patterns',
            'Successfully deployed with similar backend infrastructure to Daily Drive',
            'Proved adaptability across different frontend frameworks'
          ]
        },
        {
          heading: 'Lessons Learned',
          content: [
            'UX patterns from one domain can successfully transfer to another',
            'Angular provides excellent structure for larger applications',
            'Reusable backend APIs reduce development time and improve consistency',
            'Visual feedback is crucial for user confidence in booking systems'
          ]
        }
      ]
    },
    'case-study-3': {
      title: 'Apple-store',
      subtitle: 'Premium E-commerce Inspired Ride Booking',
      techStack: ['PHP', 'CSS', 'JavaScript', 'MySQL'],
      duration: '2 months',
      image: '/Portfolio/apple.jpg',
      sections: [
        {
          heading: 'Problem Statement',
          content: 'After exploring modern MERN and MEAN stacks, the goal was to work with traditional backend technologies while maintaining a premium user experience. The challenge was to create a ride-booking platform inspired by Apple\'s minimalist, elegant design philosophy using PHP and MySQL.'
        },
        {
          heading: 'Solution',
          content: 'Apple-store replicates the clean, intuitive interface of the Apple Store for ride-booking. Users navigate through a seamless experience with minimal friction, clear call-to-actions, and elegant transitions. This approach proves that premium UX doesn\'t depend on modern frameworks alone.'
        },
        {
          heading: 'Technical Implementation',
          content: [
            'Backend: PHP with modular architecture for maintainability',
            'Database: MySQL with optimized queries for performance',
            'Frontend: HTML5 and CSS3 for semantic markup and responsive design',
            'Interactivity: Vanilla JavaScript for smooth interactions without heavy frameworks',
            'Architecture: MVC pattern for clear separation of concerns',
            'Security: Input validation, SQL prepared statements, and CSRF protection'
          ]
        },
        {
          heading: 'Key Features',
          content: [
            'Minimalist Design inspired by Apple\'s design language',
            'Responsive Layout that works seamlessly on all devices',
            'Smooth Ride Browsing with filtering capabilities',
            'Simple Seat Selection interface',
            'One-click Booking with minimal form fields',
            'Ride History & Favorites',
            'Secure User Authentication'
          ]
        },
        {
          heading: 'Challenges & Solutions',
          content: [
            'Challenge: Achieving modern UX with traditional technologies',
            'Solution: Focused on design fundamentals and CSS mastery',
            '',
            'Challenge: Performance optimization with server-side rendering',
            'Solution: Implemented caching strategies and database query optimization',
            '',
            'Challenge: Maintaining consistency without modern state management',
            'Solution: Well-structured PHP sessions and careful DOM manipulation'
          ]
        },
        {
          heading: 'Results & Impact',
          content: [
            'Demonstrated versatility across different technology stacks',
            'Proved that excellent UX is achievable with traditional technologies',
            'Fast page load times through optimized PHP and MySQL queries',
            'User feedback praised the clean, uncluttered interface',
            'Successfully deployed with 95% mobile responsiveness score'
          ]
        },
        {
          heading: 'Lessons Learned',
          content: [
            'Modern frameworks aren\'t always necessary for great UX',
            'Design fundamentals are more important than technology choices',
            'Traditional technologies can be highly optimized for performance',
            'Understanding multiple tech stacks increases developer versatility',
            'Minimalism and simplicity create stronger user engagement'
          ]
        }
      ]
    }
  };

  const study = caseStudies[projectId];

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="case-study-overlay">
      <div className="case-study-modal">
        <button className="case-study-close" onClick={onClose}>
          <CloseIcon size={24} />
        </button>

        <div className="case-study-header">
          <img src={study.image} alt={study.title} className="case-study-image" />
        </div>

        <div className="case-study-content">
          <h1 className="case-study-title">{study.title}</h1>
          <p className="case-study-subtitle">{study.subtitle}</p>

          <div className="case-study-meta">
            <div className="meta-item">
              <strong>Duration:</strong> {study.duration}
            </div>
            <div className="meta-item">
              <strong>Tech Stack:</strong>
              <div className="meta-tech-stack">
                {study.techStack.map((tech, idx) => (
                  <span key={idx} className="meta-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-study-sections">
            {study.sections.map((section, idx) => (
              <section key={idx} className="case-study-section">
                <h2 className="section-heading">{section.heading}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="section-list">
                    {section.content.map((item, itemIdx) => (
                      item ? <li key={itemIdx}>{item}</li> : <li key={itemIdx} style={{ height: '0.5rem' }} />
                    ))}
                  </ul>
                ) : (
                  <p className="section-text">{section.content}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .case-study-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .case-study-modal {
          background: var(--bg-primary);
          border-radius: var(--border-radius);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-in-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .case-study-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-normal);
        }

        .case-study-close:hover {
          background: var(--accent-color);
          color: var(--text-primary);
        }

        .case-study-header {
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        .case-study-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-study-content {
          padding: 2.5rem;
        }

        .case-study-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 1.5rem 0 0.5rem;
          color: var(--text-primary);
        }

        .case-study-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .case-study-meta {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          flex-wrap: wrap;
        }

        .meta-item {
          flex: 1;
          min-width: 250px;
        }

        .meta-item strong {
          display: block;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .meta-tech-tag {
          display: inline-block;
          background: var(--bg-secondary);
          padding: 0.4rem 0.8rem;
          border-radius: 0.3rem;
          font-size: 0.85rem;
          color: var(--accent-color);
        }

        .case-study-sections {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .case-study-section {
          animation: fadeInUp 0.5s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-heading {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }

        .section-text {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1rem;
        }

        .section-list {
          list-style: none;
          padding: 0;
        }

        .section-list li {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 1rem;
        }

        .section-list li:before {
          content: '▪';
          position: absolute;
          left: 0;
          color: var(--accent-color);
        }

        @media (max-width: 768px) {
          .case-study-content {
            padding: 1.5rem;
          }

          .case-study-title {
            font-size: 1.8rem;
          }

          .case-study-subtitle {
            font-size: 1rem;
          }

          .case-study-meta {
            flex-direction: column;
            gap: 1rem;
          }

          .case-study-header {
            height: 200px;
          }

          .section-heading {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudy;
