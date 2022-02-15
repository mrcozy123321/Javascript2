const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log('server running at http://localhost:'+ PORT))

app.get('/', (req, res) => {
  // res.send('<h1>Homepage</h1>')
  // res.sendFile('./views/index.html', { root: __dirname })
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

app.get('/about-us', (req, res) => {
  res.redirect('/about');
})

// middleware
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
})