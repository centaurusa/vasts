const Sequelize = require('sequelize');
const sequelize = require('../util/db');
const { VAST_POSITIONS } = require('../enums/vast-positions');

const Vast = sequelize.define('vast', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    vast_url: {
        type: Sequelize.STRING(600),
        allowNull: false,
        trim: true
    },
    position: {
        type: Sequelize.ENUM(VAST_POSITIONS),
        defaultValue: 'bottom_right'
    },
    hide_ui: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Vast;