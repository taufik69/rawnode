const http = require("http");
const { managereqres } = require("./helpers/regres");
const enviorments = require("./helpers/Enviorment");

// todo create a module scaffhoding to yor project . that object are maintain the all functionality

const app = {};

// ** create a configuratinfile to our single page application
app.config = {
  port: 3000,
};
//  **now create a server via a build in module on node js .
app.createServer = () => {
  const server = http.createServer(app.managereqres);
  server.listen(enviorments.port, () => {
    console.log(`server running on ${enviorments.port} port`);
  });
};

app.managereqres = managereqres;

// now call the createServer mehtod

app.createServer();
