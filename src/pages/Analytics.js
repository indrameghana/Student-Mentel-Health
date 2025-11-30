import React, { useState } from 'react';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  const weeklyData = {
    assessments: 3,
    avgScore: 65,
    exercises: 12,
    therapySessions: 1,
    moodTrend: 'Improving',
    improvements: [
      'Increase daily exercise to 15 minutes',
      'Practice breathing exercises before exams',
      'Schedule regular sleep routine'
    ]
  };

  const monthlyData = {
    assessments: 8,
    avgScore: 58,
    exercises: 45,
    therapySessions: 3,
    moodTrend: 'Stable',
    improvements: [
      'Consider joining anxiety support group',
      'Book additional therapy sessions',
      'Implement stress management techniques',
      'Maintain consistent exercise routine'
    ]
  };

  const currentData = selectedPeriod === 'weekly' ? weeklyData : monthlyData;

  const getScoreColor = (score) => {
    if (score >= 70) return '#10b981';
    if (score >= 50) return '#f59e0b';
    return '#ef4444';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'Improving') return '📈';
    if (trend === 'Declining') return '📉';
    return '📊';
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Student Analytics</h1>
          <p>Track your mental health progress and get personalized improvement suggestions</p>
        </div>
      </section>

      <section className="analytics">
        <div className="container">
          <div className="period-selector">
            <button 
              className={`btn ${selectedPeriod === 'weekly' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedPeriod('weekly')}
            >
              📅 Weekly Report
            </button>
            <button 
              className={`btn ${selectedPeriod === 'monthly' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedPeriod('monthly')}
            >
              📊 Monthly Report
            </button>
          </div>

          <div className="analytics-grid">
            
            {/* Overview Stats */}
            <div className="analytics-card overview">
              <h3>📋 {selectedPeriod === 'weekly' ? 'This Week' : 'This Month'} Overview</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{currentData.assessments}</div>
                  <div className="stat-label">Mental Health Checks</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" style={{color: getScoreColor(currentData.avgScore)}}>
                    {currentData.avgScore}%
                  </div>
                  <div className="stat-label">Average Wellness Score</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentData.exercises}</div>
                  <div className="stat-label">Exercises Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{currentData.therapySessions}</div>
                  <div className="stat-label">Therapy Sessions</div>
                </div>
              </div>
            </div>

            {/* Mood Trend */}
            <div className="analytics-card">
              <h3>😊 Mood Trend</h3>
              <div className="trend-display">
                <div className="trend-icon">{getTrendIcon(currentData.moodTrend)}</div>
                <div className="trend-text">
                  <strong>{currentData.moodTrend}</strong>
                  <p>Your mood has been {currentData.moodTrend.toLowerCase()} over the {selectedPeriod.replace('ly', '')}.</p>
                </div>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="analytics-card">
              <h3>🎯 Activity Summary</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">🧠</span>
                  <span>Mental Health Assessments: {currentData.assessments}</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🏃</span>
                  <span>Physical Exercises: {currentData.exercises}</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">💬</span>
                  <span>Therapy Sessions: {currentData.therapySessions}</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🎮</span>
                  <span>Wellness Games Played: {Math.floor(currentData.exercises / 3)}</span>
                </div>
              </div>
            </div>

            {/* Improvement Suggestions */}
            <div className="analytics-card improvements">
              <h3>💡 Personalized Improvements</h3>
              <p>Based on your {selectedPeriod} data, here are our recommendations:</p>
              <div className="improvement-list">
                {currentData.improvements.map((improvement, index) => (
                  <div key={index} className="improvement-item">
                    <span className="improvement-number">{index + 1}</span>
                    <span className="improvement-text">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="analytics-card">
              <h3>⚡ Quick Actions</h3>
              <div className="quick-actions">
                <button className="action-btn" onClick={() => window.location.href = '/assessment'}>
                  🧠 Take Assessment
                </button>
                <button className="action-btn" onClick={() => window.location.href = '/therapy'}>
                  💬 Book Therapy
                </button>
                <button className="action-btn" onClick={() => window.location.href = '/games'}>
                  🎮 Play Games
                </button>
                <button className="action-btn" onClick={() => window.location.href = '/support-groups'}>
                  👥 Join Groups
                </button>
              </div>
            </div>

            {/* Progress Chart Placeholder */}
            <div className="analytics-card">
              <h3>📈 Progress Chart</h3>
              <div className="chart-placeholder">
                <div className="chart-bars">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '75%'}}></div>
                  <div className="chart-bar" style={{height: '45%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '65%'}}></div>
                </div>
                <p>Wellness score over time</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Analytics;