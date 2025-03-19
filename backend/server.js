const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB – Ensure MONGO_URI is set in your .env file
const MONGO_URI = process.env.MONGO_URI || 'YOUR_MONGO_URI_HERE';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount API routes (authentication, posts, etc.)
app.use('/api/auth', require('./routes/auth'));

// Create HTTP server and attach Socket.io for real-time communication
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Socket.io integration for live updates
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});