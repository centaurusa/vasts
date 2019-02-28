const Sequelize = require('sequelize');
const config = require('config');

const { dbName, host, username, password, dialect } = config.get('dbConfig');

const sequelize = new Sequelize(dbName, username, password, { 
    dialect, 
    host,
    define: {
        timestamps: false
    },
    operatorsAliases: false
});

module.exports = sequelize;