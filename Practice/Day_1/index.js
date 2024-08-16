const http = require('http');

function database(req, res) {
  res.write("<h1>Welcome to Node.js</h1>");
  res.write("<h2>Introduction</h2>");
  res.write("<h3>Basic Points</h3>");
  res.write("<h4>Installation</h4>");
  res.write("<h5>Make First Program</h5>");
  res.write("<p>It looks like nodemon is not recognized as a command in your terminal. This usually means that nodemon isn't installed globally or isn't properly set up in your system's PATH.</p>")
  res.write('<a href="">Make First Program</a>');
  res.write('<br></br>');
  res.write('<img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"></img>');
  res.end();
}

http.createServer(database).listen(4400, () => {
  console.log('Server is listening on port 4400');
});



