const Sequelize = require('sequelize');

const sequelize = require('../util/db');

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
        type: Sequelize.ENUM('top_left', 
                             'top_middle', 
                             'top_right', 
                             'middle_left', 
                             'middle_right', 
                             'bottom_left', 
                             'bottom_middle',
                             'bottom_right'
                             ),
        defaultValue: 'bottom_right'
    },
    hide_ui: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Vast;