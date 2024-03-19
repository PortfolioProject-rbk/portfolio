const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./modules/user/route.js")
const { APP_PORT } = dotenv.config().parsed;
app.use(express.json());
// Import configuration object

app.use("/api/users",userRouter)


const sequelize = require("./database/index.js");

app.listen(APP_PORT, () => {
  console.log(`App listening on Post ${APP_PORT}`);
});
