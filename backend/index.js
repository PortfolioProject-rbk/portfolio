const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const multer = require("multer");

const sequelize = require("./database/index.js");
//import modules router
const portfolioRouter = require("./modules/portfolio/route.js");
const interestRouter = require("./modules/interest/route.js");
const userRouter = require("./modules/user/route.js");

// Import configuration object
const { APP_PORT } = dotenv.config().parsed;

// app.use(express.urlencoded({ extended: true }));
const app = express();
const upload = multer();

app.use(upload.any());
app.use(express.json());
app.use(cors());


app.use("/api/portfolio", portfolioRouter);
app.use("/api/interest", interestRouter);
app.use("/api/users", userRouter);

app.listen(APP_PORT, () => {
  console.log(`App listening on Post ${APP_PORT}`);
});
