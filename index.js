const path = require("path");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);


const port = process.env.PORT || 3000;

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(__dirname));

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
