import React from 'react';

const SupportGroups = () => {
  const groups = [
    {
      title: "🧘 Anxiety Support",
      description: "A safe space to discuss anxiety management techniques and share coping strategies with fellow students.",
      members: 24
    },
    {
      title: "💪 Stress Relief",
      description: "Learn and practice stress management techniques together. Share what works and support each other.",
      members: 18
    },
    {
      title: "🌟 Motivation & Goals",
      description: "Stay motivated and accountable with peers. Share goals, celebrate wins, and overcome challenges together.",
      members: 31
    },
    {
      title: "🏠 Homesickness Support",
      description: "For students dealing with being away from home. Share experiences and find comfort in community.",
      members: 15
    }
  ];

  const messages = [
    {
      author: "Sarah M.",
      content: "Just wanted to share that the breathing exercises we discussed last week really helped during my presentation today! 🌸"
    },
    {
      author: "Alex K.",
      content: "Does anyone have tips for managing study anxiety? Finals are coming up and I'm feeling overwhelmed."
    },
    {
      author: "Jamie L.",
      content: "@Alex K. Try the Pomodoro technique! 25 minutes focused study, then 5 minute break. It's been a game changer for me."
    },
    {
      author: "Morgan T.",
      content: "Thank you everyone for the warm welcome to the group. It feels good to know I'm not alone in this journey. 💙"
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Support Groups</h1>
          <p>Connect with peers who understand your journey and share similar experiences</p>
        </div>
      </section>

      <section className="support-groups">
        <div className="container">
          <div className="groups-grid">
            {groups.map((group, index) => (
              <div key={index} className="group-card">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <p><strong>Members:</strong> {group.members} students</p>
                <button className="btn btn-primary">Join Group</button>
              </div>
            ))}
          </div>

          <div className="chat-section">
            <h2>Community Forum - Recent Messages</h2>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  <div className="message-author">{message.author}</div>
                  <p>{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportGroups;