import React, { useState } from 'react';
import { FaPaperPlane as Send, FaEnvelope as Mail, FaMapMarkerAlt as MapPin, FaPhone as Phone } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Provide the access key
    formData.append("access_key", "7523b9bb-5e3d-4d3f-9bdd-3318e710e2f0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="bento-item col-span-4 row-span-2 reveal" style={{ transitionDelay: '0.1s' }}>
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid-2 contact-container">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's talk about everything!</h3>
          <p className="contact-desc">
            Don't like forms? Send me an email. 👋
          </p>

          <div className="info-items">
            <div className="info-item glass">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>srsonawane2005@gmail.com</p>
              </div>
            </div>

            <div className="info-item glass">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h4>Location</h4>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Project Inquiry" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>

            {result && <p className={`form-result ${result.includes('success') ? 'success' : 'error'}`}>{result}</p>}
          </form>
        </div>
      </div>

      <style>{`
        .contact-container {
          align-items: start;
        }

        .contact-subtitle {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-desc {
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: var(--border-radius);
        }

        .info-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .info-item p {
          color: var(--text-secondary);
        }

        .contact-form-container {
          padding: 2.5rem;
          border-radius: var(--border-radius);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-sm);
          color: var(--text-primary);
          font-family: inherit;
          transition: all var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
        }

        .form-result {
          margin-top: 1rem;
          text-align: center;
          font-weight: 500;
          padding: 0.75rem;
          border-radius: var(--border-radius-sm);
        }

        .form-result.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .form-result.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};

export default Contact;
