const { DataTypes } = require("sequelize");

const sequelize = require("../../database");
const Interest = require("../interest/model.js");

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

module.exports = Portfolio;