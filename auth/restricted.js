const bcrypt = require('bcryptjs');


const UsersDb = require('../users/users-model.js')

module.exports = function restricted(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        UsersDb.findBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({errorMessage: 'You shall not pass'})
            }
        })
        .catch( error => {
            res.status(500).json(error);
        })
    } else {
        res.status(400).json({Message: 'Need credentials'})
    } 
} 