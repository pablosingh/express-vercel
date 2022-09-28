const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Operation = db.define('operation', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
  });

module.exports = Operation;