const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// handling get request
app.get('/', (req, res) => {
  res.send('A simple Node App is running on this server');
  res.end();
});

//openssl  req -nodes -new -x509 -keyout private-key.pem -out certificate.pem
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};

const server = https.createServer(options, app);

//port number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
