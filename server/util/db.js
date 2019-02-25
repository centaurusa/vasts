const Sequelize = require('sequelize');

const sequelize = new Sequelize('vasts-project', 'root', 'zxasqw12', { 
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;