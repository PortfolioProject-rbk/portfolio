const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

// Import configuration object
const { APP_PORT } = dotenv.config().parsed;

const sequelize = require("./database/index.js");

//import modules router
const portfolioRouter = require("./modules/portfolio/route.js");
//import interest router
const interestRouter = require("./modules/interest/route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/portfolio", portfolioRouter);
app.use("/api/interest", interestRouter);

app.listen(APP_PORT, () => {
  console.log(`App listening on Post ${APP_PORT}`);
});
