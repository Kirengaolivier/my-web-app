// index.js

const http = require('http');
const { login } = require('./auth'); // Import the login function

// Test login feature in console
console.log(login("admin", "1234"));

// Define server port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server with authentication feature!');
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});
