const { query } = require('express-validator/check');
const VAST_POSITION = require('../enums/vast-position');

exports.validate = method => {
    switch (method) {
        case 'createVast': {
            return [ 
                query('vastUrl', 'vast url doesn\'t exist').exists().isURL(),
                query('position', 'Invalid position').optional().isString().isIn(VAST_POSITION),
                query('hideUI').optional().isBoolean(),
            ]   
        }
    }
}

exports.validationHandler = next => result => {
    if (result.isEmpty()) return
    if (!next)
      throw new Error(
        result.array().map(i => `'${i.param}' has ${i.msg}`).join(' ')
      )
  else
    return next(
      new Error(
       result.array().map(i => `'${i.param}' has ${i.msg}`).join('')
      )
    )
  }