const express = require('express');
const { exec } = require('child_process');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('voice-command', (command) => {
    if (command.includes('open file explorer')) {
      exec('explorer'); // Windows; use 'open .' for Mac, 'xdg-open .' for Linux
    } else if (command.includes('open notepad')) {
      exec('notepad'); // Adjust for your OS/app
    } else {
      // Handle other commands, e.g., search web
    }
  });
});

server.listen(3000);