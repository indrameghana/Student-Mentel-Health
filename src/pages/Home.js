import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">🌟</div>
            <h1>Your Mental Well-being Matters</h1>
            <p>A safe space for students to find support, resources, and connect with others on their mental health journey.</p>
            <div className="hero-buttons">
              <Link to="/resources" className="btn btn-primary">
                📚 Explore Resources
              </Link>
              <Link to="/therapy" className="btn btn-secondary">
                💬 Book Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">How We Support You</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Resources</h3>
              <p>Access articles, videos, and tips for mental wellness</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Therapy Sessions</h3>
              <p>Schedule virtual sessions with qualified professionals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Support Groups</h3>
              <p>Connect with peers facing similar challenges</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Entertainment</h3>
              <p>Relax with music, games, and wellness activities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;