const { query } = require('express-validator/check');
const { VAST_POSITIONS } = require('../enums/vast-positions');

exports.validate = method => {
    switch (method) {
        case 'createVast': {
            return [ 
                query('vastURL').trim().exists().withMessage('vast url is required').isURL().withMessage('the url is invalid'),
                query('position').optional().isString().isIn(VAST_POSITIONS),
                query('hideUI').optional().isBoolean(),
            ]   
        }
    }
}
