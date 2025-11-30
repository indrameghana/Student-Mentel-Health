import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Smith', message: 'Hello! How are you feeling today?', time: '10:30 AM', isTherapist: true },
    { id: 2, sender: 'You', message: 'Hi Dr. Smith, I\'ve been feeling a bit anxious lately.', time: '10:32 AM', isTherapist: false },
    { id: 3, sender: 'Dr. Smith', message: 'I understand. Can you tell me more about what\'s been causing this anxiety?', time: '10:35 AM', isTherapist: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        isTherapist: false
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate therapist response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'Dr. Smith',
          message: 'Thank you for sharing that with me. Let\'s work through this together.',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          isTherapist: true
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>💬 Therapy Chat</h1>
          <p>Secure messaging with your therapist</p>
        </div>
      </section>

      <section className="chat">
        <div className="container">
          <div className="chat-container">
            <div className="chat-header">
              <div className="therapist-info">
                <div className="avatar">👨‍⚕️</div>
                <div>
                  <h3>Dr. Smith</h3>
                  <span className="status">🟢 Online</span>
                </div>
              </div>
            </div>
            
            <div className="chat-messages">
              {messages.map(msg => (
                <div key={msg.id} className={`message ${msg.isTherapist ? 'therapist' : 'user'}`}>
                  <div className="message-content">
                    <p>{msg.message}</p>
                    <span className="message-time">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <form onSubmit={sendMessage} className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                required
              />
              <button type="submit" className="send-btn">📤</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;