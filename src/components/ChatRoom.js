import React, { useState, useEffect } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]); // Start with an empty array
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMsg = { id: Date.now(), sender: 'You', text: input.trim() };
      setMessages(prev => [...prev, newMsg]);
      setInput('');
    }
  };

  // Simulate receiving live messages.
  useEffect(() => {
    const interval = setInterval(() => {
      const newMsg = { id: Date.now(), sender: 'Friend', text: 'Live message at ' + new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, newMsg]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chatroom">
      <h2>Live Chat Room</h2>
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your message..." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;