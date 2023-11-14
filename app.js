// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the chat app backend!');
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.json({ success: true, username });
});

app.post('/send-message', (req, res) => {
  try {
    const { username, message } = req.body;
    console.log(username,message)

    // Read existing messages
    // const messages = JSON.parse(fs.readFileSync('messages.json', 'utf8')) || [];

    // // Add the new message
    // messages.push({ username, message });

    // // Write updated messages back to the file
    // fs.writeFileSync('messages.json', JSON.stringify(messages), 'utf8');

    // Respond with success
    res.json({ success: true, message, username });
  } catch (error) {
    // Handle errors and respond with an error status
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
