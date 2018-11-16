const User = require('../models/Users')

const { body } = require('express-validator/check')
exports.validate = (method) => {
    switch (method) {
        case 'createUser':
            body('userName', 'userName doesnt exists').exists(),
            body('email', 'Invalid email').exists().isEmail(),
            body('phone').optional().isInt(),
            body('status').optional().isIn(['enabled', 'disabled'])
    }
}

exports.createUser = (req, res, next) => {
    /** Here you need to validate user input. 
     Let's say only Name and email are required field
   */

    const { userName, email, phone, status } = req.body
    if (userName && email && isValidEmail(email)) {

        // isValidEmail is some custom email function to validate email which you might need write on your own or use npm module
        User.create({
            userName,
            email,
            phone,
            status,
        })
            .then(user => res.json(user))
            .catch(next)
    }
}