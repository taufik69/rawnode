const url = require("url");
const { StringDecoder } = require("string_decoder");

// module scaffhoding
const handlereqres = {};
handlereqres.managereqres = (req, res) => {
  const get_url = url.parse(req.url, true);
  const pathName = get_url.pathname;
  const trimPath = pathName.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = get_url.query;
  const headerObject = req.headers;

  // make a usable object to stringdecoder
  const decoder = new StringDecoder("utf-8");
  let realdata = "";
  req.on("data", (buffer) => {
    realdata += decoder.write(buffer);
  });

  req.on("end", () => {
    realdata += decoder.end();
    console.log("real data is :", realdata);
    res.end("work perfctly");
  });
};

module.exports = handlereqres;
