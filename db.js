// make sure to remove unused imports
const path = require('path');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

module.exports = {
    sequelize
};