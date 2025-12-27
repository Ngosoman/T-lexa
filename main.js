const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('index.html');
});

# In index.html (frontend)
<script>
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    console.log('Heard:', transcript);
    // Send to backend for processing
    socket.emit('voice-command', transcript);
  };
  recognition.start();
</script>