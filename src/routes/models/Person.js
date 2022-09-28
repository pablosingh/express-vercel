const operation = require('./operation.js');
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

person.hasMany(operation, {
    foreinkey: "personId",
    sourceKey: "id",
  });
  
operation.belongsTo(person, { 
    foreinkey: "personId", 
    targetId: "id" 
});

module.exports = person;