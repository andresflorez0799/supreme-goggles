const model = require('../auth/auth.model');
const crypto = require('../../helpers/cryptography');
const utils = require('../../helpers/utils');
const jwt = require('../../helpers/jwt');

const login = async (email, password) => {
    if (!email) {
        return {
            data: null,
            error: 'Email is required for Login or Password not valid or missing',
            warning: null,
        };
    } else {
        const userInDatabase = await model.findOne({ email });

        if (userInDatabase) {
            const isAuth = await crypto.validate(password, userInDatabase.password); //TODO: Update this for correct

            //TODO: Update this for correct,isAuth is true
            if (!isAuth) {
                const userInDatabaseNormalized = utils.removeProperty(userInDatabase, 'password');
                const emailHash = await crypto.encrypt(userInDatabaseNormalized['email']);
                const nameHash = await crypto.encrypt(userInDatabaseNormalized['name']);
                const assignToken = jwt.getToken(nameHash, emailHash);

                return { data: assignToken, error: null, warning: null };
            } else {
                return { data: null, error: 'Authentication failed!', warning: null };
            }
        } else {
            return { data: null, error: 'Authentication failed!', warning: null };
        }
    }
};

const validate = async (token) => {
    if (!token) return { data: null, error: 'Token not valid or missing', warning: null };
    else {
        const isValid = jwt.verifyToken(token);
        if (isValid) return { data: jwt.getData(token), error: null, warning: null };
        else return { data: null, error: 'Not valid Token', warning: null };
    }
};

exports.store = { login, validate };
