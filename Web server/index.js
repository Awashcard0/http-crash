const http = require('http');
const fs = require('fs');
const url = require('url');

let pass = "SET PASS HERE";
let val = "n";
let msg = ""

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/') {
    const html = `
      <html>
        <head>
          <title>Crash control</title>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <h1>Crash control</h1>
            <p>Current: ${val}</p>
            <p> Message: ${msg}</p>
            
          <form action="/set" method="GET">
            <input type="text" name="value" placeholder="Value">
            <input type="text" name="description" placeholder="Message to say">
            <input type="text" name="password" placeholder="Password">
            <button type="submit">Submit</button>
          </form>
          <a href="#" onclick="alert('Value shoud be, y for crash, ym for crash with message, n for no message or crash');">Help</a>
        </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (pathname === '/set') {
    const { value, description , password} = query;
    if (password == pass) {
      if (value) {
        val = value;
        msg = description;
        res.writeHead(301, { Location: '/' });
        res.end();
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('400 Bad Request - Must have Value');
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('400 Bad Request - Must have password entered correctly ');
    } 
  } else if (pathname === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.readFile('./style.css', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else if (pathname === '/val') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(val);
  } else if (pathname === '/msg') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(msg);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000 (http://localhost:3000/)');
});
