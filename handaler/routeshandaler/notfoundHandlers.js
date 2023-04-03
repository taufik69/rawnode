// todo modulue scaffhodling

const handaler = {};

handaler.notfoundHandaler = (requestedObject, callback) => {
  callback(404, {
    message: "Sorry page not found",
  });
};

module.exports = handaler;
