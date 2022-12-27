const responses = require('../../network/response');
const services = require('./auth.service');

//... Authenticate user and get token
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const datos = await services.store.login(email, password);

        if (datos.data) {
            responses.success(req, res, datos.data);
        } else if (datos.warning) {
            responses.warning(req, res, datos.warning);
        } else if (datos.error) {
            responses.error(req, res, datos.error);
        }
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

const validate = async (req, res) => {
    try {
        const { token } = req.body;

        const datos = await services.store.validate(token);

        if (datos.data) {
            responses.success(req, res, datos.data);
        } else if (datos.warning) {
            responses.warning(req, res, datos.warning);
        } else if (datos.error) {
            responses.error(req, res, datos.error);
        }
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

module.exports = { login, validate };
