/**
 * Tile: Up down monitoring app
 * Author: Taufik islam
 * Description: Setup env file and module
 */

// todo module scaffholding

const enviorments = {};

enviorments.developement = {
  port: 3000,
  envName: "developement",
};

enviorments.production = {
  port: 6000,
  envName: "production",
};

const currentEnviorment =
  typeof process.env.NODE_ENV === "string"
    ? process.env.NODE_ENV
    : "developement";

const enviormentToExport =
  typeof enviorments[currentEnviorment] === "object"
    ? enviorments[currentEnviorment]
    : enviorments.developement;

module.exports = enviormentToExport;
