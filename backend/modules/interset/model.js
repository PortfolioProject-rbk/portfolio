const { Sequelize, DataTypes, STRING } = require("sequelize");
const sequelize = require("../index.js");
const Interest=sequelize.define("interest",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
  
})
module.export=Interest