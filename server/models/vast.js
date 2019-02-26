const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const { VAST_POSITION } = require('../enums/vast-position');

const Vast = sequelize.define('vast', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    vast_url: {
        type: Sequelize.STRING(600),
        allowNull: false
    },
    position: {
        type: Sequelize.ENUM(VAST_POSITION),
        defaultValue: 'bottom_right'
    },
    hide_ui: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Vast;