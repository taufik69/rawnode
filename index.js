const http = require("http");
const url = require("url");
const { managereqres } = require("./helpers/regres");

// create a module scaffhoding to yor project . that object are maintain the all functionality

const app = {};

// create a configuratinfile to our single page application

app.config = {
  port: 9000,
};

// now create a server via a build in module on node js .
app.createServer = () => {
  const server = http.createServer(app.managereqres);
  server.listen(app.config.port, () => {
    console.log(`server running on ${app.config.port} port`);
  });
};

app.managereqres = managereqres;

// now call the createServer mehtod

app.createServer();
