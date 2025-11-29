import React, { useState } from 'react';

const Admin = () => {
  const [resourceForm, setResourceForm] = useState({
    title: '',
    type: '',
    description: ''
  });

  const therapyRequests = [
    { name: "Sarah Johnson", date: "2024-01-15", time: "2:00 PM", status: "Pending" },
    { name: "Michael Chen", date: "2024-01-16", time: "10:00 AM", status: "Confirmed" },
    { name: "Emma Davis", date: "2024-01-17", time: "4:00 PM", status: "Pending" }
  ];

  const handleResourceChange = (e) => {
    setResourceForm({
      ...resourceForm,
      [e.target.name]: e.target.value
    });
  };

  const handleResourceSubmit = (e) => {
    e.preventDefault();
    if (resourceForm.title && resourceForm.type && resourceForm.description) {
      alert('Resource added successfully!');
      setResourceForm({ title: '', type: '', description: '' });
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <p>Manage therapy requests and platform resources</p>
        </div>
      </section>

      <section className="admin-content">
        <div className="container">
          <div className="admin-stats">
            <div className="stat-card">
              <h3>📋 Therapy Requests</h3>
              <p><strong>Pending:</strong> 12 requests</p>
              <p><strong>Scheduled:</strong> 8 sessions</p>
            </div>
            
            <div className="stat-card">
              <h3>👥 Active Users</h3>
              <p><strong>Total Students:</strong> 156</p>
              <p><strong>Active Groups:</strong> 4</p>
            </div>
          </div>

          <div className="admin-sections">
            <div className="requests-section">
              <h3>Recent Therapy Requests</h3>
              <div className="requests-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {therapyRequests.map((request, index) => (
                      <tr key={index}>
                        <td>{request.name}</td>
                        <td>{request.date}</td>
                        <td>{request.time}</td>
                        <td>
                          <span className={`status ${request.status.toLowerCase()}`}>
                            {request.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="form-container">
              <h3>Add New Resource</h3>
              <form onSubmit={handleResourceSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Resource Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={resourceForm.title}
                    onChange={handleResourceChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="type">Resource Type</label>
                  <select
                    id="type"
                    name="type"
                    value={resourceForm.type}
                    onChange={handleResourceChange}
                    required
                  >
                    <option value="">Select type</option>
                    <option value="article">Article</option>
                    <option value="video">Video</option>
                    <option value="guide">Guide</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    value={resourceForm.description}
                    onChange={handleResourceChange}
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Add Resource</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;