const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist/heroku-app-chintan')));

// For all routes, send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/heroku-app-chintan/index.html'));
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 