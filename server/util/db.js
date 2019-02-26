const Sequelize = require('sequelize');
const config = require('config');

const { dbName, host, username, password } = config.get('dbConfig');

const sequelize = new Sequelize(dbName, username, password, { 
    dialect: 'mysql', 
    host: host,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;