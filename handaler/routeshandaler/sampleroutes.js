// todo modulue scaffhodling

const handaler = {};

handaler.samplehandaler = (requestedObject, callback) => {
  const { pathName, trimPath, method } = requestedObject;
  callback(200, {
    taufik: "This is sample handaler routes",
    message: "This is sample handaler routes" + " " + method + "" + pathName,
  });
};

module.exports = handaler;
