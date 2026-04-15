import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="modern-hero">
      <div className="hero-background-composition">
        <div className="hero-image-wrap">
          <img src="/couple.png" alt="Couple" className="fade-image" />
        </div>
      </div>

      <div className="hero-text-content">
        <div className="hero-dates">
          <span className="small-caps">Save the Date</span>
          <span className="date-numbers">05 . 03 . 26</span>
        </div>
        <h1 className="hero-headline">
          <span className="name-mia">Mia</span>
          <span className="ampersand">&</span>
          <span className="name-johnny">Roopak</span>
        </h1>
        <p className="hero-subtext">Are getting married. We invite you to share our joy in a beautiful seaside celebration.</p>
        <a href="#rsvp" className="modern-btn">RSVP</a>
      </div>
    </section>
  );
};

export default Hero;
