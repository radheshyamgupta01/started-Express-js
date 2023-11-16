
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to the backend app</h1>
        <button><a href="/contact">Contact</a></button>
      </body>
    </html>
  `);
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.json({ success: true, username });
});

function readAndWriteToFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) {
        reject(err);
        return;
      }

      const newData = JSON.parse(fileData || '[]');
      newData.push(data);

      fs.writeFile(filePath, JSON.stringify(newData), 'utf8', (writeErr) => {
        if (writeErr) {
          reject(writeErr);
          return;
        }
        resolve();
      });
    });
  });
}

app.post('/send-message', async (req, res) => {
  try {
    const { username, message,password } = req.body;
    console.log(username, message,password);

    // Specify the path to your data file
    const dataFilePath = path.join(__dirname, 'data.json');

    // Use the function to read and write data to the file
    await readAndWriteToFile(dataFilePath, { username, message,password });

    res.json({ success: true, message, username,password });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/contact', (req, res) => {
  const contactFile = path.join(__dirname, 'Views', 'contact.html');
  res.sendFile(contactFile);
});

app.post('/success', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password= req.body.password;
    console.log(name, email,password);

    // Specify the path to your data file
    const dataFilePath = path.join(__dirname, 'data.json');

    // Use the function to read and write data to the file
    await readAndWriteToFile(dataFilePath, { name, email ,password});

    res.send(`
      <html>
        <body>
          <h1>Message sent successfully</h1>
          <button><a href="/">Back to Home</a></button>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
