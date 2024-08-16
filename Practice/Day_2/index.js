const http = require('http');
const fs = require('fs');
const path = require('path');

// Load data from db.json
const filePath = path.join(__dirname, 'db.json');
let data = JSON.stringify([]);

fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
        console.error('Error reading db.json:', err);
    } else {
        data = fileData; // Load the content of db.json
    }
});

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data); // Serve the loaded JSON data
    res.end();
}).listen(5000, () => {
    console.log('Server running on port 5000');
});
