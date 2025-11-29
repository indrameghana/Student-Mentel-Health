import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "Managing Study Stress",
      description: "Learn effective techniques to handle academic pressure and maintain balance during exam periods.",
      type: "Read More"
    },
    {
      title: "Mindfulness for Students",
      description: "Discover simple mindfulness exercises you can practice between classes to reduce anxiety.",
      type: "Watch Video"
    },
    {
      title: "Building Healthy Sleep Habits",
      description: "Tips for improving sleep quality and establishing routines that support mental health.",
      type: "Read More"
    },
    {
      title: "Dealing with Homesickness",
      description: "Strategies for coping with being away from home and building new support networks.",
      type: "Read More"
    },
    {
      title: "Time Management Techniques",
      description: "Practical methods to organize your schedule and reduce overwhelming feelings.",
      type: "Watch Video"
    },
    {
      title: "Social Anxiety Support",
      description: "Understanding social anxiety and practical steps to feel more comfortable in social situations.",
      type: "Read More"
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Mental Health Resources</h1>
          <p>Discover helpful articles, videos, and tips to support your mental well-being</p>
        </div>
      </section>

      <section className="resources">
        <div className="container">
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card">
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <button className="btn btn-primary">{resource.type}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;