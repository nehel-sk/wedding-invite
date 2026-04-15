import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  return (
    <section className="details-section">
      <div className="details-container">
        <div className="details-header">
          <h2 className="details-title">The<br/>Details</h2>
          <div className="details-line"></div>
        </div>
        <div className="details-content">
           <div className="detail-item">
             <span className="detail-label">When</span>
             <h3 className="detail-value text-serif">May 3rd, 2026</h3>
             <p className="detail-sub">Ceremony 4:00 PM <br/> Reception 6:30 PM</p>
           </div>
           
           <div className="detail-item">
             <span className="detail-label">Where</span>
             <h3 className="detail-value text-serif">Varakal Beach Resort</h3>
             <p className="detail-sub">Sunset Point, Coastal Highway<br/>Main Building</p>
           </div>
           
           <div className="detail-item">
             <span className="detail-label">Dress Code</span>
             <h3 className="detail-value text-serif">Beach Formal</h3>
             <p className="detail-sub">Dress to impress, but keep<br/>the sand out of your shoes.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
export default EventDetails;
