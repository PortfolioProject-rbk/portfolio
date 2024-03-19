const express = require("express");
const app = express();
const dotenv = require("dotenv");
// Import configuration object
const { APP_PORT } = dotenv.config().parsed;

const sequelize = require("./database/index.js");

app.listen(APP_PORT, () => {
  console.log(`App listening on Post ${APP_PORT}`);
});
