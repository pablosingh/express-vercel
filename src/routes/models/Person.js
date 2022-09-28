const Operation = require('./Operation.js');
const { DataTypes } = require('sequelize');
const { db } = require('../db');

const person = db.define('person', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
});

person.hasMany(Operation, {
    foreinkey: "personId",
    sourceKey: "id",
  });
  
Operation.belongsTo(person, { 
    foreinkey: "personId", 
    targetId: "id" 
});

module.exports = person;