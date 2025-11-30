import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const quickStats = {
    sessionsCompleted: 8,
    assessmentScore: 72,
    exercisesThisWeek: 15,
    nextAppointment: 'Tomorrow, 2:00 PM'
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>📊 Student Dashboard</h1>
          <p>Your mental health journey at a glance</p>
        </div>
      </section>

      <section className="dashboard">
        <div className="container">
          <div className="dashboard-grid">
            
            {/* Quick Stats */}
            <div className="dashboard-card stats-card">
              <h3>📈 Quick Stats</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-icon">💬</span>
                  <span>Sessions: {quickStats.sessionsCompleted}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🧠</span>
                  <span>Wellness Score: {quickStats.assessmentScore}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🏃</span>
                  <span>Exercises: {quickStats.exercisesThisWeek}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">📅</span>
                  <span>Next: {quickStats.nextAppointment}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-card">
              <h3>⚡ Quick Actions</h3>
              <div className="action-grid">
                <Link to="/assessment" className="action-item">
                  <span className="action-icon">🧠</span>
                  <span>Take Assessment</span>
                </Link>
                <Link to="/therapy" className="action-item">
                  <span className="action-icon">💬</span>
                  <span>Book Session</span>
                </Link>
                <Link to="/games" className="action-item">
                  <span className="action-icon">🎮</span>
                  <span>Play Games</span>
                </Link>
                <Link to="/chat" className="action-item">
                  <span className="action-icon">💭</span>
                  <span>Chat Now</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="dashboard-card">
              <h3>📋 Recent Activity</h3>
              <div className="activity-feed">
                <div className="activity-item">
                  <span className="activity-time">2 hours ago</span>
                  <span>Completed breathing exercise</span>
                </div>
                <div className="activity-item">
                  <span className="activity-time">Yesterday</span>
                  <span>Therapy session with Dr. Smith</span>
                </div>
                <div className="activity-item">
                  <span className="activity-time">2 days ago</span>
                  <span>Mental health assessment completed</span>
                </div>
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="dashboard-card">
              <h3>😊 This Week's Mood</h3>
              <div className="mood-week">
                <div className="mood-day">
                  <span>Mon</span>
                  <span className="mood-emoji">😊</span>
                </div>
                <div className="mood-day">
                  <span>Tue</span>
                  <span className="mood-emoji">🙂</span>
                </div>
                <div className="mood-day">
                  <span>Wed</span>
                  <span className="mood-emoji">😐</span>
                </div>
                <div className="mood-day">
                  <span>Thu</span>
                  <span className="mood-emoji">😊</span>
                </div>
                <div className="mood-day">
                  <span>Fri</span>
                  <span className="mood-emoji">😄</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;