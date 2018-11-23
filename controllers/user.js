const User = require('../models/Users')

const { body } = require('express-validator/check')
exports.validate = (method) => {
    switch (method) {
        case 'createUser':
            console.log("validation process")
            // body('phone').optional().isInt(),
            // body('status').optional().isIn(['enabled', 'disabled'])
    }
}

exports.createUser = (req, res, next) => {
    /** Here you need to validate user input. 
     Let's say only Name and email are required field
   */

    const { first_name, last_name, password, birthdate, address, gender, bloodType, city, country, telephone, cellphone, avatar, email} = req.body
    if (userName && email && isValidEmail(email)) {

        // isValidEmail is some custom email function to validate email which you might need write on your own or use npm module
        
    }
}