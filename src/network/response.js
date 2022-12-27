const httpCodes = require('../enums/httpCodes');

/**
 * Normalized response for success
 * @param {*} req request
 * @param {*} res response
 * @param {*} data data response
 */
const success = (req, res, data) => {
    res.status(httpCodes.EnumHttpStatus.OK).send({
        stamp: new Date(),
        status: 'OK',
        code: httpCodes.EnumHttpStatus.OK,
        data: data || null,
        error: null,
    });
};

const warning = (req, res, msj) => {
    res.status(httpCodes.EnumHttpStatus.BAD_REQUEST).send({
        stamp: new Date(),
        status: 'BAD_REQUEST',
        code: httpCodes.EnumHttpStatus.BAD_REQUEST,
        data: null,
        error: msj,
    });
};

const error = (req, res, error) => {
    res.status(httpCodes.EnumHttpStatus.INTERNAL_SERVER_ERROR).send({
        stamp: new Date(),
        status: 'INTERNAL_SERVER_ERROR',
        code: httpCodes.EnumHttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        error: error || 'Internal server error',
    });
};

const invalid = (req, res) => {
    res.status(httpCodes.EnumHttpStatus.NOT_ACCEPTABLE).send({
        stamp: new Date(),
        status: 'NOT_ACCEPTABLE',
        code: httpCodes.EnumHttpStatus.NOT_ACCEPTABLE,
        data: null,
        error: null,
    });
};

const denied = (req, res) => {
    res.status(httpCodes.EnumHttpStatus.DENIED).send({
        stamp: new Date(),
        status: 'Access to the resource is not allowed or not Authorized',
        code: httpCodes.EnumHttpStatus.DENIED,
        data: null,
        error: null,
    });
};

module.exports = { success, warning, error, invalid, denied };
