import React, { useState, useEffect } from 'react';
import './MessageSystem.css';

const MessageSystem = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey there!' },
    { id: 2, sender: 'You', text: 'Hi, how are you?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMsg = { id: Date.now(), sender: 'You', text: input.trim() };
      setMessages(prev => [...prev, newMsg]);
      setInput('');
    }
  };

  // Simulate incoming live messages.
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), sender: 'Friend', text: 'This is a live message.' }
      ]);
    }, 10000); // every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message-system">
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <span className="sender">{msg.sender}</span>: {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input 
            type="text" 
            value={input} 
            onChange={(e)=> setInput(e.target.value)} 
            placeholder="Type a message..." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessageSystem;