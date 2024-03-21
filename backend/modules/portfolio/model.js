const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Interest = require("../interest/model.js");
const SocialPlatform = require("../SocialPlatform/model.js");
const User = require("../user/model.js");

const Portfolio = sequelize.define("portfolio", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  city: {
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,
  },
  backgroundImage: {
    type: DataTypes.STRING,
  },
});

// Establish m2m relationships
Portfolio.belongsToMany(Interest, { through: "userInterset", as: "Interests" });
Interest.belongsToMany(Portfolio, { through: "userInterset" });

// Establish m2m relationships
Portfolio.belongsToMany(SocialPlatform, { through: "contact" });
SocialPlatform.belongsToMany(Portfolio, { through: "contact" });

//Establish one2one relationships
User.hasOne(Portfolio);
Portfolio.belongsTo(User);

module.exports = Portfolio;
