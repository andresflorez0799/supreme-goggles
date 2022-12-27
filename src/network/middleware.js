const response = require('../network/response');
const jwt = require('../helpers/jwt');

//... Validate yout token request header by tag authorization and value of type 'Bearer token-xyz'
const checkToken = (req, res, next) => {
    const token = req.headers.authorization == undefined ? '' : req.headers.authorization.split(' ').pop(); //get token, example Bearer xxxxxxxx

    const isValid = jwt.verifyToken(token);

    isValid ? next() : response.denied(req, res);
};

//... Other app policy
const checkOrigin = (req, res, next) => {
    //.. Custom Logic here

    next();

    //response.invalid(req, res);
};

module.exports = { checkToken, checkOrigin };
