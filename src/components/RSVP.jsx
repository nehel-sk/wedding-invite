import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [attendance, setAttendance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attendance) {
      alert("Please let us know if you will attend.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="rsvp-section-modern">
      <div className="rsvp-container">
        {!submitted ? (
          <div className="rsvp-form-box">
             <h2 className="rsvp-title text-serif">Kindly Respond</h2>
             <p className="rsvp-text">We request the favor of your reply by April 1st, 2026.</p>
             <form onSubmit={handleSubmit} className="modern-form">
                <input type="text" placeholder="First & Last Name" required className="modern-input" />
                
                <div className="attendance-group">
                  <p className="attendance-label">Will you attend?</p>
                  <div className="attendance-options">
                    <button 
                      type="button" 
                      className={`attendance-btn ${attendance === 'yes' ? 'selected' : ''}`}
                      onClick={() => setAttendance('yes')}
                    >
                      Joyfully Accept
                    </button>
                    <button 
                      type="button" 
                      className={`attendance-btn ${attendance === 'no' ? 'selected' : ''}`}
                      onClick={() => setAttendance('no')}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {attendance === 'yes' && (
                  <div className="guest-input-wrapper">
                    <input type="number" placeholder="Number of Guests" min="1" max="10" required className="modern-input guest-input" />
                  </div>
                )}
                
                <button type="submit" className="modern-submit">Send</button>
             </form>
          </div>
        ) : (
          <div className="rsvp-success">
             <h2 className="rsvp-title text-serif">Thank You</h2>
             <p className="rsvp-text">Your response has been received.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default RSVP;
