const jwt = require('jsonwebtoken');
const config = require('../config/secrets');

const secret = config.secrets.JWT_SECRET;

/**
 * Generate a valid token with custom data {name, email}
 * @param {*} name
 * @param {*} email
 * @returns Token data
 */
const getToken = (name, email) =>
    jwt.sign(
        {
            sub: 1,
            app: 'api-backend',
            n: name,
            e: email,
            expire: new Date(),
        },
        secret,
        { expiresIn: '6h' } //1h, 60 * 60,
    );

/**
 * Validate if valid token
 * @param {*} token
 * @returns True if success
 */
const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret, (err, decoded) => !err);
    } catch (error) {
        return false;
    }
};

/**
 * Get data from token, if valid.
 * @param {*} token
 * @returns Data, valid = false if error
 */
const getData = (token) => {
    try {
        const data = jwt.verify(token, secret, (err, decoded) => decoded);
        data.valid = true;
        data.expUTC = new Date(data.exp * 1000);
        data.expLOCAL = data.expUTC.toLocaleString('es-ES', { hour12: true });
        data.token = token;

        return data;
    } catch (error) {
        return {
            valid: false,
        };
    }
};

module.exports = { getToken, verifyToken, getData };
