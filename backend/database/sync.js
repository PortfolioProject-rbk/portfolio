const sequelize = require("./");
const User = require("../modules/user/model");
const Portfolio = require("../modules/portfolio/model");
const Interest = require("../modules/interest/model");

(async () => {
  await sequelize.sync({ force: true });
})();
