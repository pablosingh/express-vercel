const Operation = require('./Operation.js');
const { DataTypes } = require('sequelize');
const { db } = require('../db');

const Person = await db.define('person', {
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

Person.hasMany(Operation, {
    foreinkey: "personId",
    sourceKey: "id",
  });
  
Operation.belongsTo(Person, { 
    foreinkey: "personId", 
    targetId: "id" 
});

module.exports = Person;