/**
 * *title: up down api
 * ? Author: Taufik islam
 * Date:3 april 2023
 *
 */

const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../Routes.js");
const {
  notfoundHandaler,
} = require("../handaler/routeshandaler/notfoundHandlers.js");
/* ------------------------------- *saffhoding ------------------------------- */

const handler = {};

handler.managereqres = (req, res) => {
  const get_url = url.parse(req.url, true);
  const pathName = get_url.pathname;
  const trimPath = pathName.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = get_url.query;
  const headerObject = req.headers;

  // *make a usable object to stringdecoder
  // todo const decoder = new StringDecoder("utf-8");

  let realdata = "";

  /* ---------------------- //*choossing route via conditon ---------------------- */
  const requestedObject = {
    get_url,
    pathName,
    trimPath,
    method,
    queryStringObject,
    headerObject,
  };
  const choosehandaler = routes[trimPath] ? routes[trimPath] : notfoundHandaler;

  req.on("data", (buffer) => {
    realdata += decoder.write(buffer);
  });

  req.on("end", () => {
    realdata += decoder.end();
    choosehandaler(requestedObject, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 404;
      payload = typeof payload === "object" ? payload : {};
      const payloadString = JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
};

module.exports = handler;
