module.exports = function restricted(req, res, next) {

    if (req.session && req.session.username) {
        next();
    } else {
        res.status(401).json({Message: 'You shall not pass, nice try, AI will now be haunting your computer foreverrrrr!'})
    } 
} 