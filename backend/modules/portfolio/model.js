const { Sequelize, DataTypes, STRING } = require("sequelize");
const sequelize = require("../index.js");
const Interest = require("../interest/model.js");
const Portfolio = sequelize.define("portfolio", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  photo: {
    type: DataTypes.STRING,
    defaultValue: STRING,
  },
  backgroundImage: {
    type: DataTypes.STRING,
    defaultValue: STRING,
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

Portfolio.belongsToMany(Interest, { through: "userInterset" });
Interest.belongsToMany(Portfolio, { through: "userInterset" });

module.export = Interest;
