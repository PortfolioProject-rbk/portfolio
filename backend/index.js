const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./modules/user/route.js")

// Import configuration object
const { APP_PORT } = dotenv.config().parsed;
app.use(express.json());
app.use(cors())
// Import configuration object

app.use("/api/users",userRouter)


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
