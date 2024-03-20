const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Interest = require("../interest/model.js");
const SocialPlatform = require("../SocialPlatform/model.js");
const  User = require("../user/model.js");

const Portfolio = sequelize.define("portfolio", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  photo: {
    type: DataTypes.STRING,
  },
  backgroundImage: {
    type: DataTypes.STRING,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Establish m2m relationships
Portfolio.belongsToMany(Interest, { through: "userInterset" });
Interest.belongsToMany(Portfolio, { through: "userInterset" });

// Establish m2m relationships
Portfolio.belongsToMany(SocialPlatform, { through: "contact" });
SocialPlatform.belongsToMany(Portfolio, { through: "contact" });

//Establish one2one relationships
User.hasOne(Portfolio);
Portfolio.belongsTo(User);

module.exports = Portfolio;
