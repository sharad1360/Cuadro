const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Route for t-shirts page
app.get('/tshirts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'tshirts.html'));
});

// Route for hoodies page
app.get('/hoodies', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'hoodies.html'));
});

// Route for oversized t-shirts page
app.get('/oversized-tshirts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'oversized-tshirts.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
