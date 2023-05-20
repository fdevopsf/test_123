// Import the built-in 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, world!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
